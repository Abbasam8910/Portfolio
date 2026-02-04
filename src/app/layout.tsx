import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://abbasam.dev'),
  title: {
    default: 'Abbas A M | AI/ML Engineer | Computer Vision & NLP Specialist',
    template: '%s | Abbas A M'
  },
  description: 'AI/ML Engineer specializing in Computer Vision, NLP, and Edge AI. Building scalable ML solutions from research to production. Expertise in PyTorch, YOLOv8, and LLM deployment.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Computer Vision',
    'NLP',
    'Edge AI',
    'PyTorch',
    'YOLOv8',
    'LLM',
    'RAG',
    'MLOps',
    'Portfolio'
  ],
  authors: [{ name: 'Abbas A M', url: 'https://abbasam.dev' }],
  creator: 'Abbas A M',
  publisher: 'Abbas A M',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abbasam.dev',
    title: 'Abbas A M | AI/ML Engineer',
    description: 'Building intelligent systems that ship. Specialized in Computer Vision, NLP, and Edge AI deployment.',
    siteName: 'Abbas A M Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abbas A M | AI/ML Engineer',
    description: 'Building intelligent systems that ship. CV • NLP • Edge AI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Abbas A M',
              jobTitle: 'AI/ML Engineer',
              url: 'https://abbasam.dev',
              sameAs: [
                'https://linkedin.com/in/abbasam8910',
                'https://github.com/Abbasam8910',
              ],
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'Computer Vision',
                'Natural Language Processing',
                'Deep Learning',
                'Edge AI',
                'MLOps'
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Cochin University of Science and Technology'
              },
              worksFor: {
                '@type': 'Organization',
                name: 'Intellijohn Labs Pvt Ltd'
              }
            })
          }}
        />
      </body>
    </html>
  );
}
