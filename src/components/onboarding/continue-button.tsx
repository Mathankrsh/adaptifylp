import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContinueButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    showSparkle?: boolean;
    className?: string;
    disabled?: boolean;
}

export function ContinueButton({
    onClick,
    children = "Continue",
    showSparkle = false,
    className,
    disabled = false,
}: ContinueButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "inline-flex items-center justify-center gap-2",
                "px-5 py-2.5 text-sm font-medium text-white",
                "bg-brand rounded-lg",
                "hover:bg-[#4338ca] transition-colors",
                "shadow-sm shadow-brand/20",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
        >
            {showSparkle && <Sparkles className="size-4" />}
            {children}
            <ArrowRight className="size-4" />
        </button>
    );
}
