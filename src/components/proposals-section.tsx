"use client";

import { motion } from "framer-motion";
import { FileOutput, BarChart3, Settings2, CheckCircle2 } from "lucide-react";
import { GridLines } from "@/components/grid-lines";

export function ProposalsSection() {
    return (
        <section className="py-24 px-4 md:px-6 bg-white relative overflow-hidden border-b border-neutral-200">
            <GridLines />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium text-green-600">Win More</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="font-['Inter'] text-[42px] md:text-[56px] font-[600] leading-[1.1] text-neutral-900 tracking-[-0.04em] mb-6"
                    >
                        Win More Clients With <br />
                        Instant Proposals
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
                        className="text-neutral-500 text-lg max-w-2xl"
                    >
                        Stop spending hours on proposals that don't convert. Generate data-backed, beautiful proposals that convert cold leads in minutes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Instant Proposals */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                            <FileOutput className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="font-['Inter'] text-[20px] font-[500] leading-[28px] text-neutral-900 -tracking-[0.02em] mb-3">Instant Proposals</h3>
                        <p className="text-neutral-500 mb-6">
                            From keyword gap analysis to roadmap in one click.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Keyword Gap Analysis</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Competitor Research</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Professional Reports */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                            <BarChart3 className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-['Inter'] text-[20px] font-[500] leading-[28px] text-neutral-900 -tracking-[0.02em] mb-3">Professional Reports</h3>
                        <p className="text-neutral-500 mb-6">
                            Fully automated white-label reporting that clients love.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Live Dashboard</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>PDF Export</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Fully Adjustable */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                            <Settings2 className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="font-['Inter'] text-[20px] font-[500] leading-[28px] text-neutral-900 -tracking-[0.02em] mb-3">Fully Adjustable Client Strategies</h3>
                        <p className="text-neutral-500 mb-6">
                            Customize every aspect of the campaign to fit your client's needs.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Custom Budgets</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Approval Workflows</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
