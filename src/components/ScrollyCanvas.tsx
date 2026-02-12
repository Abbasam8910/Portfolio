'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import frames from './frames.json';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        frames.forEach((frame) => {
            const img = new Image();
            img.src = `/sequence/${frame}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frames.length) {
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load ${frame}`);
                loadedCount++;
                if (loadedCount === frames.length) {
                    setIsLoaded(true);
                }
            }
            imgs.push(img);
        });
        setImages(imgs);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frames.length - 1]);

    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        // Enable alpha for transparent backgrounds
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // High-DPI support
        const dpr = window.devicePixelRatio || 1;
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;

        if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
            canvas.style.width = `${displayWidth}px`;
            canvas.style.height = `${displayHeight}px`;
        }

        const cw = canvas.width;
        const ch = canvas.height;
        const img = images[index];
        const iw = img.width;
        const ih = img.height;

        // Responsive zoom: less zoom on mobile (portrait orientation)
        const isMobile = displayWidth < 768; // Tailwind md breakpoint
        const zoomFactor = isMobile ? 0.5 : 0.7; // Less zoom on mobile
        const scale = Math.max(cw / iw, ch / ih) * zoomFactor;
        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        // Enable high-quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Create cinematic gradient background (blue-left to orange-right)
        const gradient = ctx.createRadialGradient(
            cw * 0.7, ch * 0.5, 0,           // Center-right (orange side)
            cw * 0.7, ch * 0.5, cw * 0.8    // Radius
        );
        gradient.addColorStop(0, '#ff6b35');      // Warm orange center
        gradient.addColorStop(0.4, '#1a1a2e');    // Dark transition
        gradient.addColorStop(0.7, '#16213e');    // Deep blue
        gradient.addColorStop(1, '#0a0a0a');      // Dark edges

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, cw, ch);

        // Draw transparent image with alpha
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    }, [images]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (isLoaded) {
            renderFrame(Math.round(latest));
        }
    });

    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded, renderFrame]);

    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) renderFrame(Math.round(frameIndex.get()));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, frameIndex, renderFrame]);

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative bg-[#0a0a0a]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                <Overlay scrollYProgress={scrollYProgress} />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-50 text-blue-500 font-mono tracking-widest animate-pulse">
                        Loading Abbas&apos;s Portfolio...
                    </div>
                )}
            </div>
        </div>
    );
}
