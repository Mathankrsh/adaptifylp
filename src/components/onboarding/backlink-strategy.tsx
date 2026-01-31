"use client";

import { useState } from "react";
import { Newspaper, Mic, MessageSquare, MapPin, FileText, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { HelpTooltip } from "@/components/ui/help-tooltip";

const TABS = [
    { id: "growth", label: "DR Growth", icon: TrendingUp },
    { id: "pr", label: "PR Backlinks", icon: Newspaper },
    { id: "local", label: "Local", icon: MapPin },
    { id: "guest", label: "Guest Posts", icon: FileText },
];

const TOPICS = [
    "digital marketing",
    "search engine optimization",
    "SEO",
    "technology implementation",
    "link building",
];

const PR_ITEMS = [
    {
        icon: Newspaper,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
        title: "Industry Journalist Outreach",
        description: "Targeted outreach to 5-15 publications each month covering your industry.",
        drRange: "DR 50-90",
    },
    {
        icon: Mic,
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
        title: "Press Release Distribution",
        description: "Regular press releases based on existing website content to send to 100+ news outlets.",
        drRange: "DR 40-80",
    },
    {
        icon: MessageSquare,
        iconBg: "bg-green-50",
        iconColor: "text-green-500",
        title: "Expert Commentary",
        description: "Position you as an industry expert for reporter quotes.",
        drRange: "DR 60-90",
    },
];

const LOCAL_ITEMS = [
    {
        title: "Directories & Listings",
        description: "Register with industry-specific directories that rank in your area.",
        drRange: "DR 30-60",
    },
    {
        title: "Local Media Coverage",
        description: "Get featured in local newspapers, blogs, and local websites.",
        drRange: "DR 30-60",
    },
];

function DRGrowthTab() {
    return (
        <div className="space-y-6">
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
                <p className="text-sm text-neutral-600 text-pretty">
                    We had{" "}
                    <span className="text-brand font-medium">18 reporter requests</span>{" "}
                    in the last month related to Digital Marketing. We will get you 1-6 high
                    quality (Avg. DA45) PR backlinks per month.
                </p>
            </div>

            <div>
                <p className="text-sm text-neutral-500 mb-2">
                    Topics we&apos;ll pitch this website for:
                </p>
                <div className="flex flex-wrap gap-2">
                    {TOPICS.map((topic) => (
                        <span
                            key={topic}
                            className="px-3 py-1 text-sm bg-neutral-100 text-neutral-600 rounded-full"
                        >
                            {topic}
                        </span>
                    ))}
                    <span className="px-3 py-1 text-sm bg-neutral-100 text-neutral-500 rounded-full">
                        +25
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-brand/5 to-transparent rounded-xl border border-brand/20">
                <div>
                    <p className="text-sm text-neutral-500">Current Domain Rating</p>
                    <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-3xl font-semibold text-neutral-900 tabular-nums">26</span>
                        <span className="text-sm text-neutral-500">DR</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Current Profile</p>
                </div>
                <div>
                    <p className="text-sm text-neutral-500">3 month growth</p>
                    <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-3xl font-semibold text-neutral-900 tabular-nums">30</span>
                        <span className="text-sm text-neutral-500">DR</span>
                        <span className="ml-2 text-sm font-medium text-green-600">+4</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Avg. when starting</p>
                </div>
                <div>
                    <p className="text-sm text-neutral-500">6-12 month growth</p>
                    <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-3xl font-semibold text-neutral-900 tabular-nums">38</span>
                        <span className="text-sm text-neutral-500">DR</span>
                        <span className="ml-2 text-sm font-medium text-green-600">+12</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Avg. for this type</p>
                </div>
            </div>
        </div>
    );
}

function PRBacklinksTab() {
    return (
        <div className="space-y-4">
            <p className="text-sm text-neutral-500">
                Earned media placements that generate high-authority links and brand mentions.
            </p>
            {PR_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                    <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 border border-neutral-200 rounded-xl bg-neutral-50"
                    >
                        <div
                            className={cn(
                                "flex-shrink-0 size-10 rounded-lg flex items-center justify-center",
                                item.iconBg
                            )}
                        >
                            <Icon className={cn("size-5", item.iconColor)} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-neutral-900">{item.title}</h3>
                            <p className="mt-0.5 text-sm text-neutral-500">{item.description}</p>
                        </div>
                        <span className="flex-shrink-0 px-2 py-1 text-xs font-medium text-brand bg-brand/10 rounded">
                            {item.drRange}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

function LocalTab() {
    return (
        <div className="space-y-4">
            <p className="text-sm text-neutral-500">
                Boost local search rankings with targeted links from local publications and directories.
            </p>
            <div className="grid grid-cols-2 gap-4">
                {LOCAL_ITEMS.map((item) => (
                    <div
                        key={item.title}
                        className="p-4 border border-neutral-200 rounded-xl bg-neutral-50"
                    >
                        <h3 className="font-medium text-brand">{item.title}</h3>
                        <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                        <span className="inline-block mt-3 px-2 py-1 text-xs font-medium text-brand bg-brand/10 rounded">
                            {item.drRange}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function GuestPostsTab() {
    return (
        <div className="space-y-4">
            <p className="text-sm text-neutral-500">
                Strategic content placement on high-authority industry websites.
            </p>
            <div className="p-4 border border-neutral-200 rounded-xl">
                <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded">
                    Digital Marketing
                </span>
                <p className="mt-2 text-sm text-neutral-500">
                    📝 agencygrowthinsights.com
                </p>
                <h3 className="mt-2 text-lg font-medium text-neutral-900">
                    &quot;Scaling Your SEO Agency: How AI Automation Drives Growth Without Headcount&quot;
                </h3>
            </div>
            <p className="text-sm text-neutral-500">
                We typically reach out to{" "}
                <span className="font-medium text-brand">12-50 sites like this monthly</span>{" "}
                to secure high-quality guest posting opportunities.
            </p>
        </div>
    );
}

export function BacklinkStrategy() {
    const [activeTab, setActiveTab] = useState("growth");

    return (
        <div className="bg-white rounded-2xl border border-neutral-200 p-8">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-neutral-900">
                        Backlink Building Strategy
                    </h1>
                    <p className="mt-1 text-sm text-neutral-500">
                        Your personalized link building roadmap
                    </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-neutral-600">
                    How does this work?
                    <HelpTooltip
                        content="We reach out to journalists, bloggers, and website owners on your behalf to secure links. You don't need to do anything - we handle the outreach, negotiations, and placement."
                    />
                </span>
            </div>

            <div className="flex gap-1 p-1.5 bg-neutral-100/80 rounded-xl mb-6">
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-white text-neutral-900 shadow-sm ring-1 ring-black/5"
                                    : "text-neutral-500 hover:text-neutral-900 hover:bg-white/50"
                            )}
                        >
                            <Icon className={cn("size-4 transition-colors", isActive ? "text-brand" : "text-neutral-400")} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <div className="min-h-[320px]">
                {activeTab === "growth" && <DRGrowthTab />}
                {activeTab === "pr" && <PRBacklinksTab />}
                {activeTab === "local" && <LocalTab />}
                {activeTab === "guest" && <GuestPostsTab />}
            </div>

            <p className="mt-6 text-xs text-neutral-400">* Results may vary for each site.</p>
        </div>
    );
}
