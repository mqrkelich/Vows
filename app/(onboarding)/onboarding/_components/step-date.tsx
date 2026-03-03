"use client"

import { useState, useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface StepDateProps {
    weddingDate: string;
    notSureYet: boolean;
    onChange: (key: string, value: string | boolean) => void;
}

export function StepDate({ weddingDate, notSureYet, onChange }: StepDateProps) {
    const [localNotSure, setLocalNotSure] = useState(notSureYet);

    const daysAway = useMemo(() => {
        if(!weddingDate) return null;
        const diff = Math.ceil(
            (new Date(weddingDate).getTime() - Date.now()) /
            (1000 * 60 * 60 * 24)
        )

        return diff > 0 ? diff : null
    }, [weddingDate])

    const handleToggleNotSure = () => {
        const next = !localNotSure
        setLocalNotSure(next)
        onChange("notSureYet", next)
        if(next) onChange("weddingDate", "")
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground text-balance">
                    When is the big day?
                </h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    Pick your wedding date, or skip if you are still deciding.
                </p>
            </div>

            <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-1.5 w-full max-w-xs">
                    <Label htmlFor="wedding-date" className="text-foreground/80 text-center">
                        Wedding date
                    </Label>

                    <Input
                        id="wedding-date"
                        type="date"
                        value={weddingDate}
                        onChange={(e) => onChange("weddingDate", e.target.value )}
                        disabled={localNotSure}
                        className="h-12 text-center font-sans text-base"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleToggleNotSure}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium font-sans transition-all duration-200 border ${localNotSure ? "bg-primary/10 border-primary text-foreground" : "bg-card border-border text-muted-foreground hover:border-primary/40"}`}
                >
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${localNotSure ? "border-primary" : "border-muted-foreground/40"}`}>
                        {localNotSure && (
                            <span className="w-2 h-2 rounded-full bg-primary" />
                        )}
                    </span>
                    We haven't decided yet
                </button>

                {daysAway && !localNotSure && (
                    <div className="bg-secondary/50 rounded-xl px-6 py-4 text-center mt-2">
                        <p className="font-serif text-xl text-foreground italic">That's <span className="text-primary font-semibold not-italic">{daysAway}</span> days away!</p>
                    </div>
                )}

            </div>
        </div>
    )
}