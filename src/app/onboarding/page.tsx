"use client";

import { useState } from "react";
import Image from "next/image";
import { StepIndicator } from "@/components/onboarding/step-indicator";
import { ContinueButton } from "@/components/onboarding/continue-button";
import { UserType } from "@/components/onboarding/user-type";
import { ExpertiseLevel } from "@/components/onboarding/expertise-level";
import { SeoGoals } from "@/components/onboarding/seo-goals";
import { TabNavigation } from "@/components/onboarding/tab-navigation";
import { Overview } from "@/components/onboarding/overview";
import { KeywordStrategy } from "@/components/onboarding/keyword-strategy";
import { ContentStrategy } from "@/components/onboarding/content-strategy";
import { BacklinkStrategy } from "@/components/onboarding/backlink-strategy";
import { DashboardPreview } from "@/components/onboarding/dashboard-preview";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 8;

const TABS = [
    { id: "overview", label: "Overview" },
    { id: "keyword", label: "Keyword research" },
    { id: "content", label: "Content creation" },
    { id: "backlinks", label: "Backlinks" },
    { id: "dashboard", label: "Dashboard" },
];

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userType, setUserType] = useState<string | null>(null);
    const [expertiseLevel, setExpertiseLevel] = useState<string | null>(null);
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState("overview");

    const handleContinue = () => {
        if (currentStep < TOTAL_STEPS) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            if (nextStep === 4) {
                setActiveTab("overview");
            } else if (nextStep === 5) {
                setActiveTab("keyword");
            } else if (nextStep === 6) {
                setActiveTab("content");
            } else if (nextStep === 7) {
                setActiveTab("backlinks");
            } else if (nextStep === 8) {
                setActiveTab("dashboard");
            }
        }
    };

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        const tabIndex = TABS.findIndex((t) => t.id === tabId);
        if (tabIndex >= 0) {
            setCurrentStep(tabIndex + 4);
        }
    };

    const getButtonLabel = () => {
        if (currentStep === 1) return "Continue";
        if (currentStep === 2) return "Continue";
        if (currentStep === 3) return "Continue";
        if (currentStep === 4) return "Next: Keywords";
        if (currentStep === 5) return "Next: Content";
        if (currentStep === 6) return "Next: Backlinks";
        if (currentStep === 7) return "Next: Dashboard";
        return "Complete Setup";
    };

    const canContinue = () => {
        if (currentStep === 1) return userType !== null;
        if (currentStep === 2) return expertiseLevel !== null;
        if (currentStep === 3) return selectedGoals.length > 0;
        return true;
    };

    const showTabNavigation = currentStep >= 4;
    const showFooter = currentStep < 8; // Hide footer on Dashboard step

    return (
        <div className="min-h-dvh bg-neutral-50 flex flex-col">
            <header className="bg-white border-b border-neutral-100 px-4 md:px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center gap-4">
                    <Image
                        src="/logo.svg"
                        alt="Adaptify"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                        style={{ width: 'auto' }}
                        priority
                    />
                    {showTabNavigation && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg">
                            <div className="size-6 bg-brand rounded flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="h-4 w-auto brightness-0 invert"
                                    onClick={() => setCurrentStep(1)} // Debug helper
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                            <div className="text-sm">
                                <p className="font-medium text-neutral-900">Adaptify</p>
                                <p className="text-neutral-500 text-xs">https://adaptify.ai/</p>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {showTabNavigation && (
                <div className="bg-white border-b border-neutral-100">
                    <div className="max-w-5xl mx-auto px-4 md:px-6">
                        <TabNavigation
                            tabs={TABS}
                            activeTab={activeTab}
                            onTabChange={handleTabChange}
                            completedTabs={TABS.slice(0, currentStep - 3).map((t) => t.id)}
                        />
                    </div>
                </div>
            )}

            <main className="flex-1 overflow-auto">
                <div
                    className={cn(
                        "max-w-5xl mx-auto px-4 md:px-6 py-8",
                        currentStep <= 3 &&
                        "flex items-center justify-center min-h-[calc(100dvh-180px)]"
                    )}
                >
                    {currentStep === 1 && (
                        <UserType
                            selectedType={userType}
                            onSelectionChange={setUserType}
                        />
                    )}
                    {currentStep === 2 && (
                        <ExpertiseLevel
                            selectedLevel={expertiseLevel}
                            onSelectionChange={setExpertiseLevel}
                        />
                    )}
                    {currentStep === 3 && (
                        <SeoGoals
                            selectedGoals={selectedGoals}
                            onSelectionChange={setSelectedGoals}
                        />
                    )}
                    {currentStep === 4 && <Overview />}
                    {currentStep === 5 && <KeywordStrategy />}
                    {currentStep === 6 && <ContentStrategy />}
                    {currentStep === 7 && <BacklinkStrategy />}
                    {currentStep === 8 && <DashboardPreview />}
                </div>
            </main>

            {showFooter && (
                <footer className="bg-white border-t border-neutral-100 px-4 md:px-6 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
                        <ContinueButton
                            onClick={handleContinue}
                            showSparkle={currentStep <= 3}
                            disabled={!canContinue()}
                        >
                            {getButtonLabel()}
                        </ContinueButton>
                    </div>
                </footer>
            )}
        </div>
    );
}
