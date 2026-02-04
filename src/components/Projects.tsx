'use client';

const projects = [
    {
        id: 1,
        title: "Shiksha_V1",
        category: "Edge SLM | M.Tech Thesis",
        desc: "Offline AI Tutor. Qwen2.5-1.5B 4-bit quantized (GGUF) for Android. Achieved 10 tokens/sec on mobile CPU with 70% RAM reduction.",
        gridSpan: "md:col-span-2"
    },
    {
        id: 2,
        title: "IntelliVision",
        category: "Real-Time Computer Vision",
        desc: "Workplace monitoring system upgrading CCTV with YOLOv8 Nano. Features safety (PPE) detection and instant WhatsApp/Twilio alerts.",
        gridSpan: "md:col-span-1"
    },
    {
        id: 3,
        title: "Enterprise Automation",
        category: "Fault-Tolerant Workflows",
        desc: "Orchestration engine at ForSyntax processing 500+ daily events with 99.9% reliability using n8n and Python microservices. Reduced admin load by 1000+ hours/year.",
        gridSpan: "md:col-span-3"
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#0a0a0a] py-32 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">PROJECT NEXUS</h2>
                    <div className="h-1 w-24 bg-blue-500"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer ${project.gridSpan}`}
                        >
                            {/* Abstract Data Visualization Background */}
                            <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${i === 0 ? 'from-blue-600 via-purple-600 to-transparent' : i === 1 ? 'from-emerald-600 to-transparent' : 'from-orange-600 to-red-900'}`} />
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                                    <p className="text-blue-400 text-xs font-mono uppercase tracking-widest">{project.category}</p>
                                </div>
                                <h3 className="text-4xl text-white font-bold tracking-tight mb-4 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 max-w-lg leading-relaxed">{project.desc}</p>

                                <div className="mt-6 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-sm font-mono">
                                    <span>VIEW CASE STUDY</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
