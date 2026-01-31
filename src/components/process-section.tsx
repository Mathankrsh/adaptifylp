"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, BarChart3, Zap, Search, TrendingUp, FileText, CheckCircle2, ArrowUpRight, Settings, Database } from "lucide-react";
import { SiWordpress, SiWebflow, SiShopify, SiGhost, SiSquarespace, SiWix } from "react-icons/si";
import { GridLines } from "@/components/grid-lines";

export function ProcessSection() {
    const [processingStep, setProcessingStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProcessingStep((prev) => (prev + 1) % 4); // 3 steps + 1 pause state
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        { label: 'Competitor analysis' },
        { label: 'Keyword gap detection' },
        { label: 'Content opportunities' },
    ];

    return (
        <section className="py-24 px-4 md:px-6 bg-white relative overflow-hidden border-b border-neutral-200">
            <GridLines />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-['Inter'] text-[42px] md:text-[56px] font-[600] leading-[1.1] text-neutral-900 tracking-[-0.04em] mb-6 text-balance"
                    >
                        End to End <br className="hidden md:block" />
                        Automated Process
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-neutral-500 text-lg max-w-2xl text-pretty"
                    >
                        Adaptify handles everything from keyword planning, clustering, content creation, creating SEO briefs and publishing content to your blog using AI.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bento 1: Add Your Website */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-neutral-50 rounded-[24px] p-6 border border-neutral-200/60 flex flex-col"
                    >
                        <div className="size-10 rounded-full bg-[#4f47e6] text-white flex items-center justify-center text-sm font-semibold mb-5">
                            1
                        </div>
                        <h3 className="font-['Inter'] text-[20px] font-[600] leading-[26px] text-neutral-900 mb-2 text-balance">
                            Add Your Website
                        </h3>
                        <p className="text-neutral-500 text-[14px] leading-relaxed mb-5 text-pretty">
                            We analyze your site, competitors, and niche to uncover keyword gaps and growth potential.
                        </p>

                        <div className="flex-1 bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-sm">
                            <div className="p-3 border-b border-neutral-100">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                                        <Globe className="size-4 text-neutral-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="h-7 bg-neutral-50 rounded-md border border-neutral-200 flex items-center px-2">
                                            <span className="text-xs text-neutral-400 truncate">https://yourwebsite.com</span>
                                        </div>
                                    </div>
                                    <div className="size-8 rounded-lg bg-[#4f47e6] flex items-center justify-center">
                                        <Search className="size-3.5 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 bg-neutral-50/50">
                                <div className="flex items-center gap-2 mb-3">
                                    <Settings className="size-3.5 text-neutral-400 animate-spin" style={{ animationDuration: '3s' }} />
                                    <span className="text-xs text-neutral-500">Analyzing website...</span>
                                </div>
                                <div className="space-y-2">
                                    {steps.map((item, i) => {
                                        const isCompleted = processingStep > i || processingStep === 3; // 3 implies all done/pause
                                        const isCurrent = processingStep === i;

                                        return (
                                            <motion.div
                                                key={item.label}
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0.5 }}
                                                animate={{ opacity: isCurrent || isCompleted ? 1 : 0.5 }}
                                            >
                                                {isCurrent ? (
                                                    <div className="size-3.5 rounded-full border-2 border-[#4f47e6] border-t-transparent animate-spin" />
                                                ) : isCompleted ? (
                                                    <CheckCircle2 className="size-3.5 text-green-500" />
                                                ) : (
                                                    <div className="size-3.5 rounded-full border border-neutral-300" />
                                                )}
                                                <span className={`text-xs ${isCompleted || isCurrent ? 'text-neutral-700 font-medium' : 'text-neutral-400'}`}>
                                                    {item.label} {isCurrent && "..."}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="p-3 border-t border-neutral-100">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Database className="size-3.5 text-[#4f47e6]" />
                                        <span className="text-xs font-medium text-neutral-700">3 competitors found</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#4f47e6]">
                                        <span className="text-xs font-medium">View</span>
                                        <ArrowUpRight className="size-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento 2: Get Detailed Reports */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-neutral-50 rounded-[24px] p-6 border border-neutral-200/60 flex flex-col"
                    >
                        <div className="size-10 rounded-full bg-[#4f47e6] text-white flex items-center justify-center text-sm font-semibold mb-5">
                            2
                        </div>
                        <h3 className="font-['Inter'] text-[20px] font-[600] leading-[26px] text-neutral-900 mb-2 text-balance">
                            Get Detailed Reports
                        </h3>
                        <p className="text-neutral-500 text-[14px] leading-relaxed mb-5 text-pretty">
                            Receive comprehensive SEO audits, keyword clusters, and a prioritized action roadmap.
                        </p>

                        <div className="flex-1 bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-sm">
                            <div className="p-3 border-b border-neutral-100">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <BarChart3 className="size-4 text-[#4f47e6]" />
                                        <span className="text-sm font-medium text-neutral-900">SEO Performance</span>
                                    </div>
                                    <motion.div
                                        className="flex items-center gap-1 text-green-600"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 0.3 }}
                                    >
                                        <TrendingUp className="size-3" />
                                        <span className="text-xs font-medium tabular-nums">+127%</span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex items-end gap-1 h-20">
                                    {[28, 35, 32, 45, 52, 48, 58, 72, 68, 85, 92, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex-1 rounded-t"
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                                            style={{
                                                backgroundColor: i >= 8 ? '#4f47e6' : '#e5e5e5'
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] text-neutral-400 tabular-nums">
                                    <span>Jan</span>
                                    <span>Jun</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div className="p-3 border-t border-neutral-100">
                                <div className="flex items-center gap-3 p-2.5 bg-neutral-50 rounded-lg">
                                    <FileText className="size-4 text-neutral-500" />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-medium text-neutral-900 truncate">quarterly-report.pdf</div>
                                        <div className="text-[10px] text-neutral-400">Auto-generated • 2.4 MB</div>
                                    </div>
                                    <ArrowUpRight className="size-3.5 text-neutral-400" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento 3: Publish Anywhere */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-neutral-50 rounded-[24px] p-6 border border-neutral-200/60 flex flex-col"
                    >
                        <div className="size-10 rounded-full bg-[#4f47e6] text-white flex items-center justify-center text-sm font-semibold mb-5">
                            3
                        </div>
                        <h3 className="font-['Inter'] text-[20px] font-[600] leading-[26px] text-neutral-900 mb-2 text-balance">
                            Publish Anywhere
                        </h3>
                        <p className="text-neutral-500 text-[14px] leading-relaxed mb-5 text-pretty">
                            Automate your entire publishing workflow. Content is researched, written, and pushed to your CMS automatically.
                        </p>

                        <div className="flex-1 bg-white rounded-xl border border-neutral-200/80 p-4 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="size-4 text-amber-500" />
                                <span className="text-sm font-medium text-neutral-900">Integrations</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { name: 'WordPress', Icon: SiWordpress, color: '#21759b' },
                                    { name: 'Webflow', Icon: SiWebflow, color: '#4353ff' },
                                    { name: 'Shopify', Icon: SiShopify, color: '#96bf48' },
                                    { name: 'Ghost', Icon: SiGhost, color: '#15171a' },
                                    { name: 'Squarespace', Icon: SiSquarespace, color: '#000000' },
                                    { name: 'Wix', Icon: SiWix, color: '#0c6efc' },
                                ].map((platform, i) => (
                                    <motion.div
                                        key={platform.name}
                                        className="flex flex-col items-center gap-1.5"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                                    >
                                        <div className="size-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100">
                                            <platform.Icon className="size-5" style={{ color: platform.color }} />
                                        </div>
                                        <span className="text-[10px] text-neutral-500">{platform.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-4 pt-3 border-t border-neutral-100 text-center">
                                <span className="text-xs text-neutral-400">+ 15 more platforms supported</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
