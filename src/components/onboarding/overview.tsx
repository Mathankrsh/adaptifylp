"use client";

import { CheckCircle, Globe, Edit2 } from "lucide-react";
import Image from "next/image";
import { HelpTooltip } from "@/components/ui/help-tooltip";

const PERSONAS = [
    {
        id: "agency",
        icon: "🏢",
        iconBg: "bg-blue-50",
        title: "Scaling SEO Agency Owner",
        description:
            "An SEO agency owner or manager overwhelmed by manual tasks like link building, content creation, and reporting. They struggle to scale client results and grow their business without adding headcount, seeking automation to...",
        tags: ["Agency", "Scaling", "Automation"],
        tagColor: "bg-blue-100 text-blue-700",
    },
    {
        id: "inhouse",
        icon: "👤",
        iconBg: "bg-purple-50",
        title: "In-house SEO Lead",
        description:
            "An in-house marketing or SEO manager at a growing company struggling to improve organic search performance due to limited internal resources for content creation, link building, and detailed reporting. They need an...",
        tags: ["In-house", "Growth-focused", "Resource-constrained"],
        tagColor: "bg-purple-100 text-purple-700",
    },
];

export function Overview() {
    return (
        <div className="bg-white rounded-2xl border border-neutral-200 p-8">
            <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                <span className="inline-flex items-center gap-1">
                    <Globe className="size-4 text-brand" />
                    by Adaptify SEO
                </span>
                <span>·</span>
                <span>in 36 seconds</span>
            </div>

            <h1 className="text-2xl font-semibold text-neutral-900 text-balance">
                SEO overview
            </h1>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                    This website has{" "}
                    <span className="font-semibold text-green-900">20+</span> organic
                    keywords already ranking. This site has some promising backlinks, and
                    a Domain Authority (DA) of{" "}
                    <span className="px-1.5 py-0.5 bg-green-600 text-white rounded text-xs font-medium">
                        26/100
                    </span>
                    .
                    <HelpTooltip
                        content="Domain Authority (DA) is a score from 0-100 that predicts how well a website will rank on search engines. Higher is better. 26 is a starting point with room to grow."
                        className="ml-1"
                    />
                </p>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <Globe className="size-5 text-neutral-500" />
                    <h2 className="text-lg font-semibold text-neutral-900">
                        Company Strategy
                    </h2>
                    <HelpTooltip content="This is how we understand your business. We use this to create content that matches your brand voice and targets the right audience." />
                </div>

                <div className="p-4 border border-neutral-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-brand rounded-lg flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="h-5 w-auto brightness-0 invert"
                                />
                            </div>
                            <h3 className="font-semibold text-neutral-900">Adaptify</h3>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm text-brand hover:underline cursor-pointer">
                            <Edit2 className="size-3" />
                            Edit
                        </span>
                    </div>
                    <p className="text-sm text-neutral-600">
                        Adaptify is an AI-powered SEO platform for agencies. It automates
                        content creation, backlink acquisition, keyword research, and
                        white-label reporting. Its USP is enabling agencies to scale SEO
                        efforts and client growth without increasing headcount.
                    </p>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">👥</span>
                    <h2 className="text-lg font-semibold text-neutral-900">
                        Customer Personas
                    </h2>
                    <HelpTooltip content="These are the types of people who would search for your services. We target content to attract these ideal customers." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PERSONAS.map((persona) => (
                        <div
                            key={persona.id}
                            className="p-4 border border-neutral-200 rounded-xl bg-neutral-50"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`size-10 ${persona.iconBg} rounded-lg flex items-center justify-center text-xl`}
                                    >
                                        {persona.icon}
                                    </div>
                                    <h3 className="font-semibold text-neutral-900">
                                        {persona.title}
                                    </h3>
                                </div>
                                <span className="inline-flex items-center gap-1 text-sm text-brand hover:underline cursor-pointer">
                                    <Edit2 className="size-3" />
                                    Edit
                                </span>
                            </div>
                            <p className="text-sm text-neutral-500 line-clamp-3">
                                {persona.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {persona.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`px-2 py-1 text-xs font-medium rounded ${persona.tagColor}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
