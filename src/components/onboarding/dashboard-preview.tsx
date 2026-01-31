"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export function DashboardPreview() {
    return (
        <div className="w-full h-full relative bg-neutral-50/50 rounded-2xl border border-neutral-200 overflow-hidden min-h-[600px] flex flex-col">
            {/* Mock Dashboard Header */}
            <div className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between blur-[2px]">
                <div className="flex items-center gap-4">
                    <div className="h-6 w-32 bg-neutral-100 rounded-md" />
                    <div className="h-8 w-px bg-neutral-200" />
                    <nav className="flex gap-4">
                        <div className="h-4 w-16 bg-neutral-100 rounded" />
                        <div className="h-4 w-20 bg-neutral-100 rounded" />
                        <div className="h-4 w-16 bg-neutral-100 rounded" />
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-neutral-100 rounded-full" />
                </div>
            </div>

            {/* Mock Dashboard Content */}
            <div className="flex-1 p-6 blur-[3px] opacity-60">
                <div className="grid grid-cols-4 gap-6 mb-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-white rounded-xl border border-neutral-200 p-4 h-32" />
                    ))}
                </div>
                <div className="flex gap-6">
                    <div className="flex-[2] bg-white rounded-xl border border-neutral-200 h-[400px]" />
                    <div className="flex-1 bg-white rounded-xl border border-neutral-200 h-[400px]" />
                </div>
            </div>

            {/* Signup Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 text-center"
                >
                    <div className="size-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <Lock className="size-6 text-brand" />
                    </div>

                    <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                        Save your SEO Strategy
                    </h2>
                    <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
                        Your personalized plan is ready. Create an account to access your dashboard and start growing.
                    </p>

                    <div className="space-y-3">
                        <button className="w-full h-11 bg-brand text-white font-medium rounded-xl hover:bg-brand/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20">
                            Sign up for free
                            <ArrowRight className="size-4" />
                        </button>
                        <button className="w-full h-11 bg-white border border-neutral-200 text-neutral-700 font-medium rounded-xl hover:bg-neutral-50 transition-colors">
                            Log in to existing account
                        </button>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-4 text-xs text-neutral-400">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-3.5 text-green-500" />
                            No credit card required
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-3.5 text-green-500" />
                            Free 7-day trial
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
