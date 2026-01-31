"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridLines } from "@/components/grid-lines";

export function GrowthSection() {
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
                        <span className="flex h-2 w-2 rounded-full bg-[#4f47e6]" />
                        <span className="text-sm font-medium text-[#4f47e6]">Our Features</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="font-['Inter'] text-[42px] md:text-[56px] font-[600] leading-[1.1] text-neutral-900 tracking-[-0.04em] mb-6"
                    >
                        Everything You Needed To <br />
                        Grow Traffic
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
                        className="text-neutral-500 text-lg max-w-2xl"
                    >
                        From AI that builds your links to you. Automate everything from keyword planning, clustering, content creation, creating SEO briefs and publishing.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-12 md:gap-24">
                    {/* Earn Backlinks (Left Text, Right Image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-[#F8F9FF] rounded-[40px] p-8 md:p-12 overflow-hidden border border-[#EBEBEF]"
                    >
                        <div className="md:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">Link Building</span>
                            <h3 className="font-['Inter'] text-[32px] md:text-[40px] font-semibold leading-[1.2] text-neutral-900 tracking-[-0.03em] mb-6">
                                Earn Backlinks with Automated Outreach
                            </h3>
                            <p className="text-neutral-600 text-[18px] leading-relaxed mb-8">
                                Get recognized by top websites in your niche with our automated outreach system. No manual emails required. We identify opportunities and handle the conversation for you.
                            </p>
                            <button className="px-6 py-3 rounded-full bg-[#4f47e6] text-white font-medium hover:bg-[#4338ca] transition-colors">
                                Start Building Links
                            </button>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-white rounded-2xl h-[400px] w-full relative overflow-hidden shadow-sm border border-neutral-200/50">
                                <Image
                                    src="https://res.cloudinary.com/subframe/image/upload/v1759907650/uploads/26067/viqrafahjqoyirjgw5fi.webp"
                                    alt="Earn Backlinks with Automated Link Outreach"
                                    fill
                                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Find Keywords (Right Text, Left Image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 bg-white rounded-[40px] p-8 md:p-12 overflow-hidden border border-neutral-200"
                    >
                        <div className="md:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">Keyword Strategy</span>
                            <h3 className="font-['Inter'] text-[32px] md:text-[40px] font-semibold leading-[1.2] text-neutral-900 tracking-[-0.03em] mb-6">
                                Find Keywords With Instant Topic Clustering
                            </h3>
                            <p className="text-neutral-600 text-[18px] leading-relaxed mb-8">
                                Visualize your entire content strategy in minutes. Group related keywords and identify content gaps instantly to dominate your niche authority.
                            </p>
                            <button className="px-6 py-3 rounded-full bg-[#4f47e6] text-white font-medium hover:bg-[#4338ca] transition-colors">
                                Explore Keywords
                            </button>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-[#F8F9FF] rounded-2xl h-[400px] w-full relative overflow-hidden shadow-sm border border-neutral-200/50">
                                <Image
                                    src="https://res.cloudinary.com/subframe/image/upload/v1759907660/uploads/26067/bgkykkbsozdqsd72cwtn.webp"
                                    alt="Find Keywords With Instant Topic Clustering"
                                    fill
                                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Publish Blogs (Left Text, Right Image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-[#F8F9FF] rounded-[40px] p-8 md:p-12 overflow-hidden border border-[#EBEBEF]"
                    >
                        <div className="md:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-6">Content Automation</span>
                            <h3 className="font-['Inter'] text-[32px] md:text-[40px] font-semibold leading-[1.2] text-neutral-900 tracking-[-0.03em] mb-6">
                                Publish Blogs With Automated Content Creation
                            </h3>
                            <p className="text-neutral-600 text-[18px] leading-relaxed mb-8">
                                Produce high-quality, SEO-optimized articles at scale. From brief to published in one click, matching your brand voice perfectly.
                            </p>
                            <button className="px-6 py-3 rounded-full bg-[#4f47e6] text-white font-medium hover:bg-[#4338ca] transition-colors">
                                Start Writing
                            </button>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-white rounded-2xl h-[400px] w-full relative overflow-hidden shadow-sm border border-neutral-200/50">
                                <Image
                                    src="https://res.cloudinary.com/subframe/image/upload/v1759907669/uploads/26067/llzwof8ildtvoxxxtx77.webp"
                                    alt="Publish Blogs With Automated Content Creation"
                                    fill
                                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Update Clients (Right Text, Left Image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 bg-white rounded-[40px] p-8 md:p-12 overflow-hidden border border-neutral-200"
                    >
                        <div className="md:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-6">Reporting</span>
                            <h3 className="font-['Inter'] text-[32px] md:text-[40px] font-semibold leading-[1.2] text-neutral-900 tracking-[-0.03em] mb-6">
                                Update Clients With White Label Reporting
                            </h3>
                            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-8">
                                Share branded reports, real-time dashboards, milestone alerts, and AI-written email summaries. Keep clients happy without the manual work.
                            </p>
                            <button className="px-6 py-3 rounded-full bg-[#4f47e6] text-white font-medium hover:bg-[#4338ca] transition-colors">
                                View Reports
                            </button>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-[#F8F9FF] rounded-2xl h-[400px] w-full relative overflow-hidden shadow-sm border border-neutral-200/50">
                                <Image
                                    src="https://res.cloudinary.com/subframe/image/upload/v1759907677/uploads/26067/mxjels6tfydv9amuaxg0.png"
                                    alt="Update Clients With White Label Reporting"
                                    fill
                                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
