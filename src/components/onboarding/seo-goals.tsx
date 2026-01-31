"use client";

import { FileText, Link2, Settings, FileCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { HelpTooltip } from "@/components/ui/help-tooltip";

interface SeoGoalsProps {
    selectedGoals: string[];
    onSelectionChange: (goals: string[]) => void;
}

const GOALS = [
    {
        id: "content",
        icon: FileText,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
        title: "Content Creation",
        description:
            "20+ monthly articles with automated publishing, metadata, and link optimization.",
        tooltip:
            "We create SEO-optimized blog posts targeting your keywords, published automatically to your site.",
    },
    {
        id: "backlinks",
        icon: Link2,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
        title: "Backlink Building",
        description:
            "High-authority backlinks from real sites, averaging DR 45+ authority.",
        tooltip:
            "We build links to your site from trusted websites to improve your search rankings.",
    },
    {
        id: "technical",
        icon: Settings,
        iconBg: "bg-yellow-50",
        iconColor: "text-yellow-600",
        title: "Technical SEO",
        description:
            "Site monitoring and issue detection to find upsell opportunities.",
        tooltip:
            "We scan your website for technical issues that hurt rankings and fix them for you.",
    },
    {
        id: "reporting",
        icon: FileCheck,
        iconBg: "bg-green-50",
        iconColor: "text-green-500",
        title: "White Label Reporting",
        description:
            "Fully branded client web portal, PDF reports, and AI powered insights.",
        tooltip:
            "Get client-ready reports with your branding that showcase SEO progress and results.",
    },
    {
        id: "proposals",
        icon: Sparkles,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
        title: "SEO Proposals",
        description:
            "Customized SEO proposals for your (prospective) clients.",
        tooltip:
            "Generate professional SEO proposals automatically to win new clients faster.",
    },
    {
        id: "ai-seo",
        icon: Settings,
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        title: "AI SEO / GEO",
        description:
            "Analyze, find gaps and optimize content for showing up on LLMs.",
        tooltip:
            "Optimize your content to appear in AI search results like ChatGPT, Claude, and Perplexity.",
    },
];

export function SeoGoals({ selectedGoals, onSelectionChange }: SeoGoalsProps) {
    const toggleGoal = (goalId: string) => {
        if (selectedGoals.includes(goalId)) {
            onSelectionChange(selectedGoals.filter((id) => id !== goalId));
        } else {
            onSelectionChange([...selectedGoals, goalId]);
        }
    };

    return (
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-neutral-200 p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-neutral-900 text-balance">
                    SEO Goals
                </h1>
                <span className="mt-1 text-neutral-500 text-pretty block">
                    Which{" "}
                    <span className="text-brand font-medium">SEO deliverables</span>{" "}
                    are you looking for? Please select at least one.
                    <HelpTooltip
                        content="These are the SEO services we'll set up for your website. Select all that apply."
                        className="ml-1"
                    />
                </span>
            </div>

            <div className="space-y-3">
                {GOALS.map((goal) => {
                    const Icon = goal.icon;
                    const isSelected = selectedGoals.includes(goal.id);

                    return (
                        <button
                            key={goal.id}
                            type="button"
                            onClick={() => toggleGoal(goal.id)}
                            className={cn(
                                "w-full flex items-start gap-4 p-4 rounded-xl border text-left transition-all",
                                isSelected
                                    ? "border-brand bg-brand/5 ring-1 ring-brand"
                                    : "border-neutral-200 hover:border-neutral-300 bg-white"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex-shrink-0 size-10 rounded-lg flex items-center justify-center",
                                    goal.iconBg
                                )}
                            >
                                <Icon className={cn("size-5", goal.iconColor)} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-medium text-neutral-900">{goal.title}</h3>
                                    <HelpTooltip content={goal.tooltip} />
                                </div>
                                <p className="mt-0.5 text-sm text-neutral-500 text-pretty">
                                    {goal.description}
                                </p>
                            </div>
                            <div
                                className={cn(
                                    "flex-shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition-colors",
                                    isSelected
                                        ? "border-brand bg-brand"
                                        : "border-neutral-300"
                                )}
                            >
                                {isSelected && (
                                    <svg
                                        className="size-3 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={3}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
