"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
            {isHomePage && (
                <div className="absolute inset-0 pointer-events-none z-0 max-w-[85rem] mx-auto" aria-hidden="true">
                    <div className="h-full w-full border-x border-neutral-200" />
                </div>
            )}
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between relative z-10">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Adaptify"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                        style={{ width: 'auto' }}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Features</a>
                    <a href="#how-it-works" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">How it Works</a>
                    <a href="#pricing" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</a>
                    <a href="#blog" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Resources</a>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                        Log in
                    </button>
                    <button className="text-sm font-medium bg-[#4f47e6] text-white px-5 py-2.5 rounded-lg hover:bg-[#4338ca] transition-all shadow-sm shadow-[#4f47e6]/20 flex items-center gap-2">
                        Start for free
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-neutral-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-neutral-100 p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <a href="#features" className="text-neutral-600 font-medium p-2" onClick={() => setIsOpen(false)}>Features</a>
                        <a href="#how-it-works" className="text-neutral-600 font-medium p-2" onClick={() => setIsOpen(false)}>How it Works</a>
                        <a href="#pricing" className="text-neutral-600 font-medium p-2" onClick={() => setIsOpen(false)}>Pricing</a>
                        <hr className="border-neutral-100" />
                        <button className="text-neutral-600 font-medium p-2 text-left">Log in</button>
                        <button className="bg-[#4f47e6] text-white p-3 rounded-lg font-medium text-center">Start for free</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
