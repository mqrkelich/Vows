"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "./progress-bar"
import { StepComplete } from "./step-complete"
import { StepWelcome } from "./step-welcome"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { StepCouple } from "./step-couple"
import { StepDate } from "./step-date"
import { StepVenue } from "./step-venue"
import { StepGuestsBudget } from "./step-guests-budget"
import { StepVibe } from "./step-vibe"

interface FormData {
    partner1First: string;
    partner1Last: string;
    partner2First: string;
    partner2Last: string;
    weddingDate: string;
    notSureYet: boolean;
    venueName: string;
    venueCity: string;
    venueState: string;
    guestCount: string;
    budgetRange: string;
    vibes: string[];
}

const INITIAL_DATA: FormData = {
    partner1First: "",
    partner1Last: "",
    partner2First: "",
    partner2Last: "",
    weddingDate: "",
    notSureYet: false,
    venueName: "",
    venueCity: "",
    venueState: "",
    guestCount: "",
    budgetRange: "",
    vibes: [],
}

const TOTAL_CONTENT_STEPS = 6;

export function OnboardingWizard() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
    const [direction, setDirection] = useState<"forward" | "backward">("forward");
    const [isAnimating, setIsAnimating] = useState(false);

    const setField = useCallback(
        (key: string, value: string | boolean | string[]) => {
            setFormData((prev) => ({ ...prev, [key]: value }))
        },
        []
    )

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return formData.partner1First.trim().length > 0;
            case 5:
                return formData.vibes.length > 0;
            default: 
                return true;
        }
    }

    const animateTransition = (newStep: number, dir: "forward" | "backward") => {
        setDirection(dir);
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentStep(newStep);
            setIsAnimating(false)
        }, 200)
    }

    const nextStep = () => {
        if(!canProceed()) return;
        if(currentStep < TOTAL_CONTENT_STEPS) {
            animateTransition(currentStep + 1, "forward");
        }

        if(currentStep === TOTAL_CONTENT_STEPS) {
            /* ZAVRSIO ONBOARDING - SAD FETCHAJ SERVER I SACUVAJ SVE PODATKE */
        }
    }

    const prevStep = () => {
        if(currentStep > 0) {
            animateTransition(currentStep - 1, "backward")
        }
    }

    const isWelcome = currentStep === 0;
    const isComplete = currentStep === TOTAL_CONTENT_STEPS;

    const getAnimationClasses = () => {
        if(isAnimating) {
            return direction === "forward"
            ? "opacity-0 translate-x-8"
            : "opacity-0 -translate-x-8"
        }
        
        return "opacity-100 translate-x-0"
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl shadow-sm border border-border overflow-hidden">
                {!isWelcome && !isComplete && (
                    <div className="px-8 pt-8">
                        <ProgressBar
                            currentStep={currentStep}
                            totalSteps={TOTAL_CONTENT_STEPS}
                        />
                    </div>
                )}

                <div className="px-8 py-10">
                    <div
                        className={`transition-all duration-300 ease-out ${getAnimationClasses()}`}
                    >
                        {currentStep === 0 && <StepWelcome onNext={nextStep} />}
                        {currentStep === 1 && 
                            <StepCouple
                                partner1First={formData.partner1First}
                                partner1Last={formData.partner1Last}
                                partner2First={formData.partner2First}
                                partner2Last={formData.partner2Last}
                                onChange={setField}
                            />
                        }
                        {currentStep === 2 && 
                            <StepDate
                                weddingDate={formData.weddingDate}
                                notSureYet={formData.notSureYet}
                                onChange={setField}
                            />
                        }
                        {currentStep === 3 && 
                            <StepVenue
                                venueName={formData.venueName}
                                venueCity={formData.venueCity}
                                venueState={formData.venueState}
                                onChange={setField}
                            />
                        }
                        {currentStep === 4 && 
                            <StepGuestsBudget
                                guestCount={formData.guestCount}
                                budgetRange={formData.budgetRange}
                                onChange={setField}
                            />
                        }
                        {currentStep === 5 && 
                            <StepVibe selectedVibes={formData.vibes} onChange={setField} />
                        }
                        {currentStep === 6 && <StepComplete data={formData} />}





                    </div>
                </div>

                {!isWelcome && !isComplete && (
                    <div className="px-8 pb-8 flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={prevStep}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back
                        </Button>

                        <Button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className="rounded-full px-8"
                        >
                            {currentStep === TOTAL_CONTENT_STEPS - 1 ? "Finish" : "Continue"}
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                )}
            </div>

            <div className="text-center mt-6">
                <p className="text-xs text-muted-foreground/60 font-sans">
                    Powered by <span className="font-serif italic">Vows</span>
                </p>
            </div>
        </div>
    )
}