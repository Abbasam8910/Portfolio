import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/Abbasam8910',
            label: 'GitHub Profile'
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/abbasam8910',
            label: 'LinkedIn Profile'
        },
        {
            icon: Mail,
            href: 'mailto:abbasam8910@gmail.com',
            label: 'Email Abbas'
        },
        {
            icon: Phone,
            href: 'tel:+917356669268',
            label: 'Call Abbas'
        },
    ];

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 px-4" role="contentinfo">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex gap-6" role="list">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                    aria-label={social.label}
                                    role="listitem"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Abbas A M. Building intelligent systems.
                    </p>
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center text-gray-600 text-xs">
                    <p>AI/ML Engineer • Computer Vision • Edge AI Specialist</p>
                </div>
            </div>
        </footer>
    );
}
