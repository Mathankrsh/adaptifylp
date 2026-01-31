"use client";

import { useState, useRef, useCallback } from "react";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HelpTooltipProps {
    content: string;
    className?: string;
    iconClassName?: string;
}

export function HelpTooltip({
    content,
    className,
    iconClassName,
}: HelpTooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState<"top" | "bottom">("top");
    const triggerRef = useRef<HTMLSpanElement>(null);

    const calculatePosition = useCallback(() => {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            const spaceAbove = rect.top;
            const spaceBelow = window.innerHeight - rect.bottom;
            setPosition(spaceAbove > spaceBelow ? "top" : "bottom");
        }
    }, []);

    const showTooltip = useCallback(() => {
        calculatePosition();
        setIsVisible(true);
    }, [calculatePosition]);

    const hideTooltip = useCallback(() => {
        setIsVisible(false);
    }, []);

    return (
        <span className={cn("relative inline-flex items-center", className)}>
            <span
                ref={triggerRef}
                role="button"
                tabIndex={0}
                className={cn(
                    "inline-flex items-center justify-center rounded-full cursor-pointer",
                    "text-neutral-400 hover:text-neutral-600 transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                    iconClassName
                )}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                onFocus={showTooltip}
                onBlur={hideTooltip}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        if (isVisible) {
                            hideTooltip();
                        } else {
                            showTooltip();
                        }
                    }
                }}
                aria-label={content}
            >
                <HelpCircle className="size-4" />
            </span>
            {isVisible && (
                <span
                    role="tooltip"
                    className={cn(
                        "absolute z-50 px-3 py-2 text-sm text-neutral-700 bg-white",
                        "border border-neutral-200 rounded-lg shadow-lg",
                        "w-[320px] text-pretty block",
                        "animate-in fade-in-0 zoom-in-95 duration-150",
                        position === "top"
                            ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
                            : "top-full mt-2 left-1/2 -translate-x-1/2"
                    )}
                >
                    {content}
                    <span
                        className={cn(
                            "absolute size-2 bg-white border-neutral-200 rotate-45 block",
                            position === "top"
                                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-r border-b"
                                : "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-l border-t"
                        )}
                    />
                </span>
            )}
        </span>
    );
}

