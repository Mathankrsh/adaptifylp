"use client";

import { Calendar, Edit3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HelpTooltip } from "@/components/ui/help-tooltip";

const CONTENT_ITEMS = [
    { date: "Jan 30", day: "Today", title: "How to Automate SEO Reporting for Agencies", keyword: "automate seo reporting" },
    { date: "Feb 2", day: "Mon", title: "Best Backlink Monitoring Tools for Agencies", keyword: "backlink monitoring tools" },
    { date: "Feb 3", day: "Mon", title: "Top Content Creation Apps for Agencies", keyword: "content creation apps" },
    { date: "Feb 4", day: "Tue", title: "Keyword Research Automation: Tools for Agencies", keyword: "keyword research automation" },
    { date: "Feb 5", day: "Wed", title: "Best Roofing SEO Companies in 2024", keyword: "roofing seo companies" },
    { date: "Feb 6", day: "Thu", title: "Best SEO Backlink Software for Agencies", keyword: "seo backlink software" },
    { date: "Feb 9", day: "Mon", title: "SEO for Agencies: Scaling Without Extra Headcount", keyword: "seo for agencies" },
    { date: "Feb 10", day: "Tue", title: "How to Choose the Best White Label SEO Reports for Agencies", keyword: "white label seo reports" },
    { date: "Feb 11", day: "Wed", title: "Best Tools for SEO Reporting Automation", keyword: "seo reporting automation" },
    { date: "Feb 12", day: "Thu", title: "How to Automate Backlink Monitoring for Clients", keyword: "backlink monitor tool" },
    { date: "Feb 13", day: "Fri", title: "How AI Content Creation Tools Save Agencies Time", keyword: "ai content creation tools" },
    { date: "Feb 16", day: "Mon", title: "How to Automate Keyword Research with AI", keyword: "automated keyword research" },
];

export function ContentStrategy() {
    return (
        <div className="bg-white rounded-2xl border border-neutral-200 p-8">
            <h1 className="text-2xl font-semibold text-neutral-900 text-balance">
                Content Strategy
            </h1>

            <div className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
                <p className="text-sm text-neutral-600 text-pretty">
                    We&apos;ll create content to rank on Google for keywords related to AI SEO
                    platform for agencies, automate SEO tasks, scale SEO agency and white label
                    SEO reporting, with a focus on scaling{" "}
                    <span className="text-brand font-medium">SEO agencies</span>. Click
                    &apos;Continue&apos; to view your 30 day content plan.
                </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-brand" />
                    <h2 className="text-lg font-medium text-neutral-900">
                        30 Day Content Calendar
                    </h2>
                    <HelpTooltip content="Articles are automatically scheduled and published to your website. You can adjust dates or topics anytime." />
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg">
                    <Edit3 className="size-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600">
                        Publishing daily{" "}
                        <span className="font-medium text-neutral-900">(20x/month)</span>
                    </span>
                    <HelpTooltip content="We publish fresh content regularly to build your site's authority. The frequency can be customized." />
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {CONTENT_ITEMS.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "p-4 border rounded-xl transition-all cursor-pointer",
                            "hover:border-brand hover:shadow-sm",
                            index === 0
                                ? "border-brand bg-brand/5"
                                : "border-neutral-200 bg-white"
                        )}
                    >
                        <div className="flex items-center gap-2 text-xs">
                            <span
                                className={cn(
                                    "font-semibold",
                                    index === 0 ? "text-brand" : "text-neutral-900"
                                )}
                            >
                                {item.date}
                            </span>
                            <span className="text-neutral-400">{item.day}</span>
                        </div>
                        <h3 className="mt-2 text-sm font-medium text-neutral-900 line-clamp-2">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-xs text-neutral-500 truncate">
                            {item.keyword}
                        </p>
                    </div>
                ))}
            </div>

            <p className="mt-6 text-center text-sm text-neutral-500">
                ... and more articles scheduled throughout the month
            </p>
        </div>
    );
}
