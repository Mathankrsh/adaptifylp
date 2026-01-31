"use client";

import { motion } from "framer-motion";
import { Building2, Settings, TrendingUp } from "lucide-react";

const steps = [
    {
        icon: Building2,
        title: "Connect Agency",
        description: "Upload your logo, brand colors, and configure your SMTP settings for white-label reporting.",
        step: "01"
    },
    {
        icon: Settings,
        title: "Automate SEO",
        description: "Set up backlink campaigns, content schedules, and reporting preferences in minutes.",
        step: "02"
    },
    {
        icon: TrendingUp,
        title: "Scale Revenue",
        description: "Focus on sales and strategy while Adaptify handles the fulfillment work automatically.",
        step: "03"
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 px-4 md:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[32px] md:text-[48px] font-semibold tracking-tight mb-4"
                    >
                        How it works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-500 text-lg max-w-2xl mx-auto"
                    >
                        Streamline your agency's SEO fulfillment in three simple steps.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-neutral-100 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Circle */}
                            <div className="w-32 h-32 rounded-full bg-white border-4 border-neutral-50 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#4f47e6]/10 transition-colors">
                                <div className="w-24 h-24 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#4f47e6]/5 transition-colors">
                                    <step.icon className="w-10 h-10 text-neutral-400 group-hover:text-[#4f47e6] transition-colors" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#4f47e6] text-white flex items-center justify-center text-sm font-bold">
                                    {step.step}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-neutral-500 leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

