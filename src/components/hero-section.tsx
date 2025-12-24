"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col pt-28 md:pt-40 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden bg-white">
            {/* Content Container */}
            <div className="max-w-7xl mx-auto w-full">
                {/* Text Content - Left Aligned */}
                <div className="max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4"
                    >
                        Introducing Multi Cast Audiobooks
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[32px] md:text-[48px] font-normal tracking-[-0.03em] leading-[1.15] mb-4 md:mb-6"
                    >
                        Every character brought to life with a unique voice
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-neutral-500 leading-relaxed mb-6 md:mb-8 max-w-lg"
                    >
                        Listen to audiobooks where each character has their own distinct voice.
                        Multi-cast narration makes stories feel like a movie for your ears.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-3"
                    >
                        <button className="px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-neutral-800 transition-all flex items-center gap-2">
                            Get Started Free
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <button className="px-6 py-3 bg-neutral-100 text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center gap-2">
                            <Play className="w-4 h-4 fill-current" />
                            Listen to Demo
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Hero Visual - Demo Video */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-7xl mx-auto w-full mt-10 md:mt-16"
            >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200">
                    <video
                        src="https://by3nn3vcinsb4n23.public.blob.vercel-storage.com/multicastdemo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}


