"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BadgeCheck } from "lucide-react";

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

interface StepCompleteProps {
    data: FormData;
}

export function StepComplete({ data} : StepCompleteProps) {
    const coupleName = `${data.partner1First || "Partner 1"} & ${data.partner2First || "Partner 2"}`
    const fullNames = [
        [data.partner1First, data.partner1Last].filter(Boolean).join(" "),
        [data.partner2First, data.partner2Last].filter(Boolean).join(" "),
    ]

    const formatDate = (dateStr: string) => {
        if(!dateStr) return null;

        const d = new Date(dateStr + "T00:00:00")
        return d.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    }

    const guestLabels: Record<string, string> = {
        "under-50": "Under 50 guests",
        "50-100": "50 - 100 guests",
        "100-150": "100 - 150 guests",
        "150-200": "150 - 200 guests",
        "200-300": "200 - 300 guests",
        "300+": "300+ guests",
    }

    const budgetLabels: Record<string, string> = {
        "5k-15k": "$5,000 - $15,000",
        "15k-30k": "$15,000 - $30,000",
        "30k-50k": "$30,000 - $50,000",
        "50k-100k": "$50,000 - $100,000",
        "100k+": "$100,000+",
    }

    return (
        <div className="flex flex-col gap-8 items-center">
            <div className="relative w-20 h-20 flex items-center justify-center">
                <svg
                    viewBox="0 0 80 80"
                    fill="none"
                    className="w-20 h-20"
                    aria-hidden="true"
                >
                        <circle cx="40" cy="40" r="36" fill="currentColor" className="text-primary/10" />
                        <path
                            d="M28 42l8 8 16-20"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                />
                </svg>
            </div>

            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground text-balance">
                    You are all set!
                </h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
                    Here is a summary of your wedding details. You can always change these later in settings.
                </p>
            </div>

            <div className="w-full bg-secondary/30 rounded-2xl p-6 flex flex-col gap-4">

                <div className="text-center pb-4 border-b border-border">
                    <p className="font-serif text-2xl text-foreground italic">{coupleName}</p>
                    <p className="text-sm text-muted-foreground font-sans mt-1">{fullNames.filter(Boolean).join(" & ")}</p>
                </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SummaryItem
                    label="Venue"
                    value={[data.venueName, [data.venueCity, data.venueState].filter(Boolean).join(", ")]
                        .filter(Boolean)
                        .join(" - ") || "Not specified"
                    }
                />

                <SummaryItem 
                    label="Guest Count"
                    value={guestLabels[data.guestCount] || "Not specified"}
                />

                <SummaryItem 
                    label="Budget"
                    value={budgetLabels[data.budgetRange] || "Not specified"}
                />
            </div>

            {data.vibes && data.vibes.length > 0 && (
                <div className="pt-3 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase font-sans mb-2">
                        Wedding Vibe
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {data.vibes.map((v) => (
                         <span
                            key={v}
                            className="bg-primary/10 text-foreground border border-primary/20 rounded-full px-3 py-1 text-xs font-medum font-sans capitalize"
                         >
                            {v}
                         </span>   
                        ))}
                    </div>
                </div>
            )}

            </div>
            
            <Button asChild size="lg" className="rounded-full px-10 h-12 text-base font-medium mt-2">
                <Link href="/dashboard">Go to Dashboard</Link>
            </Button>



        </div>
    )
}

function SummaryItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase font-sans">
                {label}
            </span>
            <span className="text-sm text-foreground font-sans">
                {value}
            </span>
        </div>
    )
}