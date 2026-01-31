"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GridLines } from "@/components/grid-lines";

const platforms = [
    { name: "Google", logo: "/google-2015-new-logo-png_seeklogo-268031.png", scale: 1 },
    { name: "ChatGPT", logo: "/pngimg.com - chatgpt_PNG13.png", scale: 1 },
    { name: "Claude", logo: "/claude-logo-png_seeklogo-554540.png", scale: 1.25 },
    { name: "Perplexity", logo: "/Perplexity-Logo.png", scale: 0.85 },
];

function PlatformRotator() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % platforms.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const platform = platforms[currentIndex];

    return (
        <span className="inline-flex justify-center items-center w-[220px] align-middle -ml-3 md:-ml-5">
            <AnimatePresence mode="wait">
                <motion.span
                    key={platform.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex justify-center items-center w-full"
                >
                    <img
                        src={platform.logo}
                        alt={platform.name}
                        className="h-20 md:h-28 w-auto object-contain"
                        style={{ transform: `scale(${platform.scale})` }}
                    />
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

export function HeroSection() {
    const router = useRouter();
    const [url, setUrl] = useState("");

    const handleTryDemo = () => {
        if (url) {
            router.push(`/onboarding?url=${encodeURIComponent(url)}`);
        } else {
            router.push("/onboarding");
        }
    };

    return (
        <section className="relative min-h-[80vh] flex flex-col pt-32 md:pt-48 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden bg-white border-b border-neutral-200">
            <GridLines />
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-7xl pointer-events-none -z-10">
                <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_center,_var(--brand)_0%,_transparent_70%)] opacity-20 blur-[100px]" />
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-600 mb-8 shadow-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-[#4f47e6]" />
                    Built for Agencies
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-['Inter'] text-[48px] md:text-[58px] font-[600] leading-[0.95] md:leading-[1.0] text-neutral-900 tracking-[-0.04em] text-center text-balance mb-6 md:mb-8"
                >
                    Get rank on <PlatformRotator /> <br />
                    <span className="block -mt-3 md:-mt-6">effortlessly</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-['Inter'] text-[18px] font-[500] leading-[28px] text-neutral-500 tracking-[-0.02em] mb-8 md:mb-10 max-w-2xl mx-auto"
                >
                    The AI-native SEO platform built for agencies. Automate your entire workflow from keyword research and content creation to backlink building and reporting, fully white-labeled.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center justify-center mb-24 w-full relative z-20"
                >
                    <div className="bg-white p-2 md:p-3 rounded-2xl border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[600px] mx-auto text-left relative backdrop-blur-sm">
                        <div className="bg-neutral-50/50 rounded-xl p-4 md:p-6 border border-neutral-100">
                            <p className="text-sm font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Try our Interactive Demo:
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                <div className="flex-1 relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#4f47e6] transition-colors">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter your website URL"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleTryDemo()}
                                        className="w-full h-[52px] pl-11 pr-4 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4f47e6]/10 focus:border-[#4f47e6] transition-all text-neutral-900 placeholder:text-neutral-400 text-sm md:text-base shadow-sm"
                                    />
                                </div>
                                <button
                                    onClick={handleTryDemo}
                                    className="h-[52px] px-6 bg-[#4f47e6] text-white rounded-xl font-medium text-sm md:text-base hover:bg-[#4338ca] transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-[#4f47e6]/20 active:scale-[0.98]"
                                >
                                    Try It Free
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-neutral-100/80">
                                <div className="flex items-center">
                                    <div className="flex items-center -space-x-3">
                                        <img
                                            src="/demo-faces.webp"
                                            alt="Agencies using Adaptify"
                                            className="h-10 w-auto object-contain"
                                        />
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-600 leading-snug">
                                    <span className="font-semibold text-neutral-900">362 agencies</span> automated SEO this month
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500 font-medium">
                        <span className="flex items-center gap-1.5 text-neutral-400">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            No credit card required
                        </span>
                        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                        <span className="flex items-center gap-1.5 text-neutral-400">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                            No sign up required
                        </span>
                    </div>
                </motion.div>

                <VideoComponent />
            </div>
        </section>
    );
}

function VideoComponent() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Play video
                    iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                } else {
                    // Pause video
                    iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        }, { threshold: 0.5 }); // 50% visible

        observer.observe(iframe);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50 bg-neutral-900 aspect-video relative z-10"
        >
            <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tz1omwloexQ?si=zMqeGQvKPUVf8ogx&enablejsapi=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </motion.div>
    );
}
