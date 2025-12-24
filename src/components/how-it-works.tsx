"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, Headphones } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        icon: Upload,
        title: "Upload Your Book",
        description: "Simply upload your PDF, article, or ebook. We support over 32 languages.",
        image: "/uploadfile1.png"
    },
    {
        icon: Cpu,
        title: "AI Detects Characters",
        description: "Our advanced models automatically identify different characters and narrators in the text.",
        image: "/aidetects2.png"
    },
    {
        icon: Headphones,
        title: "Listen Immersively",
        description: "Each character is assigned a unique, high-quality voice for a true cinematic experience.",
        image: "/listenimmersively.webp"
    }
];

export function HowItWorks() {
    return (
        <section className="py-16 md:py-32 px-4 md:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[24px] md:text-[32px] font-normal tracking-[-0.02em] mb-4"
                    >
                        How Multi-Cast Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-500 text-lg max-w-2xl mx-auto"
                    >
                        One book. Multiple voices. Zero effort. Experience the future of storytelling in three simple steps.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] bg-white">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 py-8 text-center"
                >
                    <p className="font-medium text-neutral-500 uppercase tracking-widest text-xs mb-4">The Result</p>
                    <p className="text-xl md:text-2xl font-normal italic text-black leading-relaxed max-w-3xl mx-auto">
                        "It's like listening to a full cast recording of a play, but for any book I own. The immersion is unmatched."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

