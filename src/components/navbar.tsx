"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent px-4 md:px-6">
            <nav className="max-w-7xl mx-auto py-5 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <Image
                        src="/elevenreader.png"
                        alt="ElevenReader"
                        width={120}
                        height={28}
                        className="h-9 w-auto"
                        priority
                        unoptimized
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">Voices</a>
                    <a href="#demo" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">Multi-Cast</a>
                    <a href="#pricing" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">Pricing</a>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">Sign In</a>
                    <a
                        href="#"
                        className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2"
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 p-6">
                    <div className="flex flex-col gap-4">
                        <a href="#features" className="py-2 text-lg font-medium">Voices</a>
                        <a href="#demo" className="py-2 text-lg font-medium">Multi-Cast</a>
                        <a href="#pricing" className="py-2 text-lg font-medium">Pricing</a>
                        <hr className="border-neutral-100" />
                        <a href="#" className="py-2 text-lg font-medium">Sign In</a>
                        <a href="#" className="py-3 bg-black text-white rounded-full text-center font-medium">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

