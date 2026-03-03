"use client"

import { BookCheck, Fish, Flower, Gem, HouseHeart, Leaf, PiggyBank, TreePine } from "lucide-react"

const VIBE_OPTIONS = [
    {
        value: "classic",
        label: "Classic",
        icon: HouseHeart
    },
    {
        value: "modern",
        label: "Modern",
        icon: Gem
    },
    {
        value: "rustic",
        label: "Rustic",
        icon: TreePine
    },
    {
        value: "bohemian",
        label: "Bohemian",
        icon: Leaf     
    },
    {
        value: "garden",
        label: "Garden",
        icon: Flower
    },
    {
        value: "beach",
        label: "Beach",
        icon: Fish
    },
    {
        value: "minimalist",
        label: "Minimalist",
        icon: BookCheck
    },
    {
        value: "glamorous",
        label: "Glamorous",
        icon: PiggyBank
    } 
]

interface StepVibeProps {
    selectedVibes: string[];
    onChange: (key: string, value: string[]) => void;
}

export function StepVibe({ selectedVibes, onChange }: StepVibeProps) {
    const toggleVibe = (value: string) => {
        const current = selectedVibes || [];
        if(current.includes(value)) {
            onChange(
                "vibes",
                current.filter((v) => v !== value)
            )
        } else if (current.length < 3) {
            onChange("vibes", [...current, value] )
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground text-balance">
                    What is your wedding vibe?
                </h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    Choose up to 3 styles that speak to you.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {VIBE_OPTIONS.map((vibe) => {
                    const isSelected = selectedVibes?.includes(vibe.value);

                    return (
                        <button
                            key={vibe.value}
                            type="button"
                            onClick={() => toggleVibe(vibe.value)}
                            className={`flex flex-col items-center gap-2.5 rounded-xl p-5 border transition-all duration-200 ${isSelected ? "bg-primary/10 border-primary ring-1 ring-primary/20 text-foreground" : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
                        >
                            <span className={isSelected ? "text-primary" : "text-muted-foreground"}>
                                <vibe.icon />
                            </span>
                            <span className="text-sm font-medium font-sans">
                                {vibe.label}
                            </span>
                        </button>
                    )
                })}
            </div>

            {selectedVibes && selectedVibes.length > 0 && (
                <div className="flex justify-center">
                    <p className="text-xs text-muted-foreground font-sans">
                        {selectedVibes.length}/3 selected
                    </p>
                </div>
            )}
        </div>
    )

}