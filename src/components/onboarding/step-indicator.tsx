import { cn } from "@/lib/utils";

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
    className?: string;
}

export function StepIndicator({
    currentStep,
    totalSteps,
    className,
}: StepIndicatorProps) {
    return (
        <p className={cn("text-sm text-neutral-500 tabular-nums", className)}>
            Step{" "}
            <span className="font-medium text-neutral-900">{currentStep}</span>/
            {totalSteps}
        </p>
    );
}
