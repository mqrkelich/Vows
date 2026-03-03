"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StepCoupleProps {
    partner1First: string;
    partner1Last: string;
    partner2First: string;
    partner2Last: string;
    onChange: (key: string, value: string) => void;
}

export function StepCouple({
    partner1First,
    partner1Last,
    partner2First,
    partner2Last,
    onChange,
}: StepCoupleProps) {
    const hasPreview = partner1First || partner2First;

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground text-balance"> 
                    The happy couple
                </h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    Tell us who is getting married.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase font-sans">
                        Partner One
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="p1-first" className="text-foreground/80">
                                First name
                            </Label>

                            <Input 
                                id="p1-first"
                                placeholder="First name"
                                value={partner1First}
                                onChange={(e) => onChange("partner1First", e.target.value )}
                                className="h-11"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="p1-last" className="text-foreground/80">
                                Last name
                            </Label>

                            <Input 
                                id="p1-last"
                                placeholder="Last name"
                                value={partner1Last}
                                onChange={(e) => onChange("partner1Last", e.target.value )}
                                className="h-11"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <span className="font-serif text-2xl text-primary/60 italic">&</span>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase font-sans">
                        Partner Two
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="p2-first" className="text-foreground/80">
                                First name
                            </Label>

                            <Input 
                                id="p2-first"
                                placeholder="First name"
                                value={partner2First}
                                onChange={(e) => onChange("partner2First", e.target.value )}
                                className="h-11"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="p2-last" className="text-foreground/80">
                                Last name
                            </Label>

                            <Input 
                                id="p2-last"
                                placeholder="Last name"
                                value={partner2Last}
                                onChange={(e) => onChange("partner2Last", e.target.value )}
                                className="h-11"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {hasPreview && (
                <div className="flex justify-center pt-2">
                    <div className="bg-secondary/50 rounded-xl px-6 py-3 text-center">
                        <span className="font-serif text-xl md:text-2xl text-foreground italic">
                            {partner1First || "..."} & {partner2First || "..."}
                        </span>
                    </div>
                </div>
            )}

        </div>
    )
}