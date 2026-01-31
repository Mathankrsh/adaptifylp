"use client";

import { cn } from "@/lib/utils";

interface UserTypeProps {
    selectedType: string | null;
    onSelectionChange: (type: string) => void;
}

const USER_TYPES = [
    {
        id: "individual",
        emoji: "👤",
        title: "Individual",
        description: "Managing my own website's SEO",
    },
    {
        id: "agency",
        emoji: "🏢",
        title: "Agency",
        description: "Managing SEO for multiple clients",
    },
    {
        id: "inhouse",
        emoji: "🏠",
        title: "In-house",
        description: "Part of a company's marketing team",
    },
    {
        id: "freelancer",
        emoji: "💼",
        title: "Freelancer",
        description: "Offering SEO services independently",
    },
];

export function UserType({ selectedType, onSelectionChange }: UserTypeProps) {
    return (
        <div className="w-full max-w-xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900 text-balance">
                    Tell us about yourself
                </h1>
                <p className="mt-2 text-neutral-500">
                    This helps us tailor your experience
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {USER_TYPES.map((type) => {
                    const isSelected = selectedType === type.id;
                    return (
                        <button
                            key={type.id}
                            type="button"
                            onClick={() => onSelectionChange(type.id)}
                            className={cn(
                                "flex flex-col items-center gap-3 p-6 rounded-2xl border text-center transition-all",
                                "hover:border-neutral-300 hover:shadow-sm",
                                isSelected
                                    ? "border-brand bg-brand/5 ring-2 ring-brand"
                                    : "border-neutral-200 bg-white"
                            )}
                        >
                            <span className="text-4xl">{type.emoji}</span>
                            <div>
                                <h3 className="font-semibold text-neutral-900">{type.title}</h3>
                                <p className="mt-1 text-sm text-neutral-500">
                                    {type.description}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>
            <div className="flex justify-center mt-8">
                <p className="text-xs text-neutral-400 font-medium">
                    * This is a mock onboarding for demonstration purposes
                </p>
            </div>
        </div>
    );
}
