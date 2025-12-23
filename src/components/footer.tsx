"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export function CTASection() {
    return (
        <section className="py-16 md:py-32 px-4 md:px-6 bg-neutral-50">
            {/* Centered Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto"
            >
                <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-black/5 border border-neutral-100 text-center">
                    {/* Logo Icon */}
                    <div className="w-14 h-14 mx-auto mb-6 bg-black rounded-xl flex items-center justify-center overflow-hidden p-2">
                        <Image
                            src="/elevenreader.png"
                            alt="ElevenReader"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain invert"
                        />
                    </div>

                    {/* Heading */}
                    <h2 className="text-[28px] font-normal tracking-[-0.02em] leading-tight mb-8">
                        Listen to anything with<br />
                        <span className="font-medium">ElevenReader</span>
                    </h2>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                        <button className="w-full py-4 bg-black text-white rounded-full font-medium text-sm uppercase tracking-wider hover:bg-neutral-800 transition-all">
                            Get Started Free
                        </button>
                        <button className="w-full py-4 bg-neutral-100 text-black rounded-full font-medium text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all border border-neutral-200">
                            Sign In
                        </button>
                    </div>

                    {/* Author Link */}
                    <p className="text-sm text-neutral-400 mt-6">
                        Already have an account? <a href="#" className="text-black underline">Author Sign-in</a>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}


export function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-neutral-100 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="col-span-2 md:col-span-2">
                    <div className="mb-6">
                        <Image
                            src="/elevenreader.png"
                            alt="ElevenReader"
                            width={160}
                            height={36}
                            className="h-8 w-auto"
                        />
                    </div>
                    <p className="text-neutral-500 leading-relaxed mb-6 max-w-sm">
                        Pioneering the future of narration with cutting-edge AI voices. Making literature accessible to everyone, everywhere.
                    </p>
                    <div className="flex gap-4">
                        <Twitter className="w-5 h-5 text-neutral-400 hover:text-black cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-neutral-400 hover:text-black cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-neutral-400 hover:text-black cursor-pointer transition-colors" />
                        <Github className="w-5 h-5 text-neutral-400 hover:text-black cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Product Column */}
                <div>
                    <h4 className="font-medium mb-6 text-sm">Product</h4>
                    <ul className="space-y-3 text-neutral-500 text-sm">
                        <li className="hover:text-black cursor-pointer transition-colors">Voices</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Multi-Cast</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Mobile App</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Pricing</li>
                    </ul>
                </div>

                {/* Company Column */}
                <div>
                    <h4 className="font-medium mb-6 text-sm">Company</h4>
                    <ul className="space-y-3 text-neutral-500 text-sm">
                        <li className="hover:text-black cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Careers</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Privacy</li>
                        <li className="hover:text-black cursor-pointer transition-colors">Terms</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                <p>© 2025 ElevenLabs. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="hover:text-black cursor-pointer transition-colors">Status</span>
                    <span className="hover:text-black cursor-pointer transition-colors">Security</span>
                    <span className="hover:text-black cursor-pointer transition-colors">Cookies</span>
                </div>
            </div>
        </footer>
    );
}

