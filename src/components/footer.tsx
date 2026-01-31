"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 px-4 md:px-6 bg-[#4f47e6]">
            {/* Centered Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center text-white"
            >
                <h2 className="text-[32px] md:text-[56px] font-semibold tracking-tight mb-8">
                    Start creating magic today <br /> with a free trial!
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-[#4f47e6] rounded-lg font-medium text-lg hover:bg-neutral-100 transition-all flex items-center gap-2">
                        Start for free
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition-all">
                        Book a Demo
                    </button>
                </div>
            </motion.div>
        </section>
    );
}


import Image from "next/image";
import { GridLines } from "@/components/grid-lines";

export function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-neutral-100 bg-white relative overflow-hidden">
            <GridLines />
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                {/* Brand Column */}
                <div className="col-span-2 md:col-span-1">
                    <div className="mb-6 flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Adaptify"
                            width={120}
                            height={32}
                            className="h-8 w-auto"
                            style={{ width: 'auto' }}
                        />
                    </div>
                    <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                        Adaptify SEO, Built for Agencies.<br />
                        78 SW 7th Street<br />
                        Miami, FL 33130
                    </p>
                    <div className="flex gap-4">
                        <Twitter className="w-5 h-5 text-neutral-400 hover:text-[#4f47e6] cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-neutral-400 hover:text-[#4f47e6] cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Adaptify SEO */}
                <div>
                    <h4 className="font-semibold mb-6 text-sm text-neutral-900">Adaptify SEO</h4>
                    <ul className="space-y-3 text-neutral-500 text-sm">
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">About Us</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Our Blog</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Newsletter</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Get Help</a></li>
                    </ul>
                </div>

                {/* Automations */}
                <div>
                    <h4 className="font-semibold mb-6 text-sm text-neutral-900">Automations</h4>
                    <ul className="space-y-3 text-neutral-500 text-sm">
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#backlinks">Backlinks</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#content">Content</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#proposals">Proposals</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#reporting">Reporting</a></li>
                    </ul>
                </div>
                {/* Resources */}
                <div>
                    <h4 className="font-semibold mb-6 text-sm text-neutral-900">Resources</h4>
                    <ul className="space-y-3 text-neutral-500 text-sm">
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Case Studies</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Knowledge Base</a></li>
                        <li className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Agency Tools</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400 relative z-10">
                <p>© 2025 Adaptify SEO. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Privacy Policy</a></span>
                    <span className="hover:text-[#4f47e6] cursor-pointer transition-colors"><a href="#">Terms</a></span>
                </div>
            </div>
        </footer>
    );
}
