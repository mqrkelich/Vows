"use client"

const GUEST_OPTIONS = [
    { label: "Under 50", value: "unded-50" },
    { label: "50 - 100", value: "50-100" },
    { label: "100 - 150", value: "100-150" },
    { label: "150 - 200", value: "150-200" },
    { label: "200 - 300", value: "200-300" },
    { label: "300+", value: "300+" },
]

const BUDGET_OPTIONS = [
    { label: "$5k - $15k", value: "5k-15k" },
    { label: "$15k - $30k", value: "15k-30k" },
    { label: "$30k - $50k", value: "30k-50k" },
    { label: "$50k - $100k", value: "50k-100k" },
    { label: "$100k+", value: "100k+" },
]

interface StepGuestsBudgetProps {
    guestCount: string;
    budgetRange: string;
    onChange: (key: string, value: string) => void;
}

export function StepGuestsBudget({
    guestCount,
    budgetRange,
    onChange,
}: StepGuestsBudgetProps) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground text-balance">
                    Guests & budget
                </h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    Give us a rough idea so we can tailor your planning experience.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase font-sans">
                    Estimated guests
                </span>
                <div className="flex flex-wrap gap-2 justify-center">
                    {GUEST_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => onChange("guestCount", opt.value )}
                            className={`rounded-full px-5 py-2.5 text-sm font-medium font-sans border transition-all duration-200 ${guestCount === opt.value ? "bg-primary/10 border-primary text-foreground ring-1 ring-primary/20" : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground" }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase font-sans">
                    Budget range
                </span>
                <div className="flex flex-wrap gap-2 justify-center">
                    {BUDGET_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => onChange("budgetRange", opt.value )}
                            className={`rounded-full px-5 py-2.5 text-sm font-medium font-sans border transition-all duration-200 ${budgetRange === opt.value ? "bg-primary/10 border-primary text-foreground ring-1 ring-primary/20" : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground" }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}