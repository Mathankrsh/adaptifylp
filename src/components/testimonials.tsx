"use client";

import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
    {
        quote: "Adaptify transformed our agency. We're now delivering 10x the backlinks without hiring more staff.",
        author: "Sarah Jenkins",
        role: "Agency Founder",
        avatar: "SJ"
    },
    {
        quote: "The automated reporting alone saves us 20 hours a month. Clients love the transparency.",
        author: "Mike Ross",
        role: "SEO Director",
        avatar: "MR"
    },
    {
        quote: "Finally, a white-label solution that actually looks like it came from us. Highly distinct.",
        author: "David Chen",
        role: "Marketing Lead",
        avatar: "DC"
    },
    {
        quote: "We scaled from 5 to 50 clients in a year thanks to the content automation features.",
        author: "Emily Watson",
        role: "Growth Manager",
        avatar: "EW"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-neutral-50 px-4 md:px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto mb-16 text-center">
                <h2 className="text-[32px] md:text-[48px] font-semibold tracking-tight mb-4">Trusted by 1,000+ Agencies</h2>
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-neutral-500 text-lg">Join the fastest growing agencies scaling with Adaptify.</p>
            </div>

            {/* G2 Badge Marquee - Seamless Scrolling */}
            <div className="relative w-full overflow-hidden mb-24">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

                <div className="flex w-full">
                    <Marquee className="[--duration:60s] [--gap:0rem]" repeat={2}>
                        <img
                            src="/g2-badges.webp"
                            alt="G2 Reviews Badges"
                            className="h-[120px] md:h-[140px] w-auto object-contain flex-shrink-0"
                        />
                    </Marquee>
                </div>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Testimonial Marquee */}
                <div className="flex animate-marquee hover:[animation-play-state:paused] gap-8 py-4">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[400px] bg-white p-8 rounded-[24px] border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <p className="text-xl font-medium text-neutral-900 mb-8 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-[#4f47e6]/10 text-[#4f47e6] flex items-center justify-center text-lg font-bold">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-900">{t.author}</h4>
                                    <p className="text-sm text-neutral-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
