"use client";

import { cn } from "@/lib/utils";

interface Tab {
    id: string;
    label: string;
}

interface TabNavigationProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
    completedTabs?: string[];
}

export function TabNavigation({
    tabs,
    activeTab,
    onTabChange,
    completedTabs = [],
}: TabNavigationProps) {
    return (
        <nav className="flex items-center gap-8 overflow-x-auto" role="tablist">
            {tabs.map((tab, index) => {
                const isActive = tab.id === activeTab;
                const isCompleted = completedTabs.includes(tab.id);
                const isAccessible = isCompleted || tab.id === activeTab;

                return (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-disabled={!isAccessible}
                        onClick={() => isAccessible && onTabChange(tab.id)}
                        className={cn(
                            "relative py-4 text-sm font-medium whitespace-nowrap transition-colors",
                            isActive
                                ? "text-neutral-900"
                                : isAccessible
                                    ? "text-neutral-600 hover:text-neutral-900"
                                    : "text-neutral-400 cursor-not-allowed"
                        )}
                    >
                        {tab.label}
                        {isCompleted && index < tabs.length - 1 && (
                            <div
                                className={cn(
                                    "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                                    isActive ? "bg-brand" : "bg-green-500"
                                )}
                            />
                        )}
                        {isActive && !isCompleted && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full" />
                        )}
                    </button>
                );
            })}
        </nav>
    );
}
