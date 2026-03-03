"use client"

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    const progrss = ((currentStep) / totalSteps) * 100

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase font-sans">
                    Step {currentStep} of {totalSteps}
                </span>
                <span className="text-xs font-medium text-muted-foreground font-sans">
                    {Math.round(progrss)}%
                </span>
            </div>
            <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-700 ease-out" style={{ width: `${progrss}%` }} />
            </div>
        </div>
    )
}