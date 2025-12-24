"use client";

import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Avatar from "boring-avatars";
import { useRef } from "react";

const voices = [
    { name: "James", trait: "Warm", category: "Narrator", colors: ["#60A5FA", "#3B82F6", "#1D4ED8", "#93C5FD", "#DBEAFE"] },
    { name: "Sarah", trait: "Elegant", category: "Heroine", colors: ["#F472B6", "#EC4899", "#DB2777", "#FBCFE8", "#FCE7F3"] },
    { name: "Marcus", trait: "Bold", category: "Villain", colors: ["#A78BFA", "#8B5CF6", "#7C3AED", "#C4B5FD", "#EDE9FE"] },
    { name: "Lily", trait: "Gentle", category: "Child", colors: ["#34D399", "#10B981", "#059669", "#6EE7B7", "#D1FAE5"] },
    { name: "Oliver", trait: "Crisp", category: "Detective", colors: ["#FB923C", "#F97316", "#EA580C", "#FDBA74", "#FED7AA"] },
    { name: "Sophia", trait: "Empathetic", category: "Mentor", colors: ["#22D3EE", "#06B6D4", "#0891B2", "#67E8F9", "#CFFAFE"] },
];

export function VoiceGallery() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
        }
    };

    return (
        <section className="py-16 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-[24px] md:text-[32px] font-normal tracking-[-0.02em] mb-4">Meet Your Voice Cast</h2>
                        <p className="text-neutral-500 text-lg">
                            Choose from hundreds of premium AI voices, each with distinct personalities and emotional range.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Voice Cards - Hidden Scrollbar */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {voices.map((voice, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[260px] bg-neutral-50 rounded-3xl p-6 border border-neutral-100"
                        >
                            {/* Avatar */}
                            <div className="w-16 h-16 mb-6">
                                <Avatar
                                    size={64}
                                    name={voice.name}
                                    variant="marble"
                                    colors={voice.colors}
                                />
                            </div>

                            <div className="mb-4">
                                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-400">
                                    {voice.category}
                                </span>
                                <h3 className="text-xl font-normal mt-1">{voice.name}</h3>
                            </div>

                            <div className="flex gap-2 mb-6">
                                <span className="px-2.5 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                                    {voice.trait}
                                </span>
                                <span className="px-2.5 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                                    High Quality
                                </span>
                            </div>

                            <button className="w-full py-3 bg-white border border-neutral-200 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition-colors">
                                <Play className="w-3.5 h-3.5 fill-current" />
                                Preview Voice
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


