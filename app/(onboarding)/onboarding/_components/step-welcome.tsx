"use client"

import { Button } from "@/components/ui/button"

interface StepWelcomeProps {
    onNext: () => void;
}

export function StepWelcome({ onNext }: StepWelcomeProps) { 
    return (
        <div className="flex flex-col items-center text-center gap-8 py-8">
            <div className="relative w-24 h-24 flex items-center justify-center">
                <svg
                    viewBox="0 0 96 96"
                    fill="none"
                    className="w-24 h-24 text-primary"
                    aria-hidden="true"
                >
                    <circle cx="36" cy="48" r="20" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                    <circle cx="60" cy="48" r="20" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>
            
            <div className="flex flex-col gap-3 max-w-md">
                <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">Let's plan your perfect day</h1>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">We will guide you through a few quick steps to set up your wedding planner. This only takes a couple of minutes.</p>
            </div>

            <Button
             onClick={onNext}
             size="lg"
             className="mt-2 rounded-full px-10 h-12 text-base font-medium"
             >
                Get Started
            </Button>
        </div>
    )
}