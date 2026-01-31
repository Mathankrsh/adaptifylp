"use client";

export function GridLines() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 max-w-[85rem] mx-auto" aria-hidden="true">
            <div className="h-full w-full border-x border-neutral-200 relative" />
        </div>
    );
}

