"use client";

import { cn } from "@/lib/utils";

interface ExpertiseLevelProps {
    selectedLevel: string | null;
    onSelectionChange: (level: string) => void;
}

const EXPERTISE_LEVELS = [
    {
        id: "beginner",
        emoji: "🌱",
        title: "Beginner",
        description: "I'm new to SEO and want to learn",
        detail: "We'll explain everything in simple terms",
    },
    {
        id: "intermediate",
        emoji: "📈",
        title: "Intermediate",
        description: "I know the basics of SEO",
        detail: "We'll focus on actionable insights",
    },
    {
        id: "expert",
        emoji: "🚀",
        title: "Expert",
        description: "I'm an SEO professional",
        detail: "We'll skip the basics and dive deep",
    },
];

export function ExpertiseLevel({
    selectedLevel,
    onSelectionChange,
}: ExpertiseLevelProps) {
    return (
        <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900 text-balance">
                    How familiar are you with SEO?
                </h1>
                <p className="mt-2 text-neutral-500">
                    We&apos;ll customize the experience to your skill level
                </p>
            </div>

            <div className="flex gap-4">
                {EXPERTISE_LEVELS.map((level) => {
                    const isSelected = selectedLevel === level.id;
                    return (
                        <button
                            key={level.id}
                            type="button"
                            onClick={() => onSelectionChange(level.id)}
                            className={cn(
                                "flex-1 flex flex-col items-center gap-3 p-6 rounded-2xl border text-center transition-all",
                                "hover:border-neutral-300 hover:shadow-sm",
                                isSelected
                                    ? "border-brand bg-brand/5 ring-2 ring-brand"
                                    : "border-neutral-200 bg-white"
                            )}
                        >
                            <span className="text-4xl">{level.emoji}</span>
                            <div>
                                <h3 className="font-semibold text-neutral-900">{level.title}</h3>
                                <p className="mt-1 text-sm text-neutral-500">
                                    {level.description}
                                </p>
                            </div>
                            <p className="text-xs text-neutral-400 mt-2">{level.detail}</p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
