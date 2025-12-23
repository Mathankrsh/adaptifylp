"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Multi-cast narration changed how I consume books. It's no longer just reading; it's a cinematic experience.",
        author: "Alex Rivera",
        role: "Power Listener",
        avatar: "👤"
    },
    {
        quote: "The way the voices switch between characters is so seamless. I sometimes forget it's AI.",
        author: "Samantha Lee",
        role: "Ebook Enthusiast",
        avatar: "👤"
    },
    {
        quote: "Finally, my favorite classics feel like they're being performed by a full cast. Absolutely brilliant.",
        author: "David Chen",
        role: "Voice Actor",
        avatar: "👤"
    },
    {
        quote: "Perfect for complex fantasies with dozens of characters. I never get confused who is talking now.",
        author: "Emily Watson",
        role: "Fantasy Reader",
        avatar: "👤"
    }
];

export function Testimonials() {
    return (
        <section className="py-16 md:py-32 bg-neutral-50 px-4 md:px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto mb-16 text-center">
                <h2 className="text-[24px] md:text-[32px] font-normal tracking-[-0.02em] mb-4">Loved by Readers</h2>
                <div className="flex items-center justify-center gap-1 text-accent-purple mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-muted-foreground text-lg">Join thousands of people who transitioned to the next generation of narration.</p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Testimonial Marquee */}
                <div className="flex animate-marquee hover:[animation-play-state:paused] gap-8 py-4">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[400px] bg-white p-8 rounded-[32px] border border-neutral-100 shadow-sm"
                        >
                            <p className="text-xl font-medium italic text-black mb-8 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-xl">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-medium">{t.author}</h4>
                                    <p className="text-xs text-neutral-500 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </section>
    );
}
