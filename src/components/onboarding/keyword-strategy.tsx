"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { HelpTooltip } from "@/components/ui/help-tooltip";

const CLUSTERS = [
    { id: 1, title: "Automate Seo Reporting", keywords: 166, rank: 45 },
    { id: 2, title: "Backlink Monitoring Tools", keywords: 230, rank: 34 },
    { id: 3, title: "Content Creation Apps", keywords: 222, rank: 44 },
    { id: 4, title: "Keyword Research Automation", keywords: 150, rank: 46 },
    { id: 5, title: "Seo Backlink Software", keywords: 237, rank: 29 },
    { id: 6, title: "Roofing Seo Companies", keywords: 115, rank: 47 },
    { id: 7, title: "Seo For Agencies", keywords: 95, rank: 35 },
    { id: 8, title: "White-Label Seo Reports", keywords: 179, rank: 48, featured: true },
];

export function KeywordStrategy() {
    return (
        <div className="bg-white rounded-2xl border border-neutral-200 p-8">
            <h1 className="text-2xl font-semibold text-neutral-900 text-balance">
                Keyword Strategy
            </h1>

            <div className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
                <p className="text-sm text-neutral-600 text-pretty">
                    We grouped your{" "}
                    <span className="text-brand font-medium">top-ranking opportunities</span>{" "}
                    into keyword clusters based on traffic potential and rankability. Click any
                    cluster to explore keywords, difficulty scores, and estimated volume.
                    <HelpTooltip
                        content="Keyword clusters group related search terms together so you can target multiple keywords with one piece of content."
                        className="ml-1"
                    />
                </p>
            </div>

            <div className="mt-4 flex items-center gap-4">
                <span className="text-sm">
                    <span className="font-semibold text-brand tabular-nums">1,394</span>{" "}
                    <span className="text-neutral-500">keywords</span>
                </span>
                <span className="text-sm">
                    <span className="font-semibold text-neutral-900 tabular-nums">8</span>{" "}
                    <span className="text-neutral-500">clusters</span>
                </span>
            </div>

            <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-lg font-medium text-neutral-900">Keyword Clusters</h2>
                    <HelpTooltip content="Each cluster represents a topic area. The number shows how many keywords we found." />
                </div>

                <div className="relative">
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-xl shadow-sm">
                            <div className="size-8 bg-brand rounded-lg flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="h-5 w-auto brightness-0 invert"
                                />
                            </div>
                            <div className="text-sm">
                                <p className="font-medium text-neutral-900">Adaptify</p>
                                <p className="text-neutral-500 text-xs">adaptify.ai/</p>
                            </div>
                        </div>
                    </div>

                    <svg
                        className="absolute top-14 left-1/2 -translate-x-1/2 w-full max-w-xl h-16 pointer-events-none"
                        viewBox="0 0 600 60"
                        fill="none"
                    >
                        <path
                            d="M300 0 Q100 30 60 60"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M300 0 Q200 30 180 60"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M300 0 L300 60"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M300 0 Q400 30 420 60"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M300 0 Q500 30 540 60"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                    </svg>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {CLUSTERS.map((cluster) => (
                            <div
                                key={cluster.id}
                                className={cn(
                                    "relative p-4 bg-white border rounded-xl transition-all cursor-pointer",
                                    "hover:border-brand hover:shadow-sm",
                                    cluster.featured
                                        ? "border-brand ring-1 ring-brand"
                                        : "border-neutral-200"
                                )}
                            >
                                <div className="absolute top-4 right-4 px-2 py-0.5 bg-neutral-100 rounded text-xs font-medium text-neutral-600 tabular-nums">
                                    {cluster.rank}
                                </div>
                                <h3 className="font-medium text-neutral-900 pr-10">
                                    {cluster.title}
                                </h3>
                                <p className="mt-1 text-sm text-brand tabular-nums">
                                    {cluster.keywords} Keywords
                                </p>
                                {cluster.featured && (
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-brand rounded-lg hover:bg-[#4338ca] transition-colors"
                                    >
                                        <Search className="size-3" />
                                        Preview this cluster
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
