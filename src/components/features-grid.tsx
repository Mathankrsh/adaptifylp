"use client";

import { motion } from "framer-motion";
import { Link2, FileText, FileSpreadsheet, BarChart3, Calculator } from "lucide-react";

const features = [
    {
        title: "Backlinks",
        description: "Secure high-authority backlinks on autopilot—no outreach, no follow-up.",
        icon: Link2,
        href: "#backlinks",
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Content",
        description: "Create and publish SEO optimized content automatically.",
        icon: FileText,
        href: "#content",
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Proposals",
        description: "Build data‑driven SEO proposals in minutes and close more deals.",
        icon: FileSpreadsheet,
        href: "#proposals",
        color: "bg-green-50 text-green-600"
    },
    {
        title: "White Label Reporting",
        description: "Share PDF reports, live dashboards, and AI-written email summaries.",
        icon: BarChart3,
        href: "#reporting",
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "ROI Calculator",
        description: "See exactly how much time and money your agency can save.",
        icon: Calculator,
        href: "#calculator",
        color: "bg-pink-50 text-pink-600"
    }
];

export function FeaturesGrid() {
    return (
        <section className="py-24 px-4 md:px-6 bg-neutral-50 relative overflow-hidden" id="features">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Everything you need to scale your SEO agency
                    </h2>
                    <p className="text-neutral-500 text-lg">
                        Automate the manual grunt work and focus on strategy and client relationships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.a
                            key={feature.title}
                            href={feature.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-neutral-100 hover:shadow-lg hover:border-neutral-200 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4f47e6] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
