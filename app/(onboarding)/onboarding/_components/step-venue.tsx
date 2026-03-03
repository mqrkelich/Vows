"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPinIcon } from "lucide-react";

interface StepVenueProps {
    venueName: string;
    venueCity: string;
    venueState: string;
    onChange: (key: string, value: string) => void;
}

export function StepVenue({
    venueName,
    venueCity,
    venueState,
    onChange
}: StepVenueProps) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground text-balance">
                    Where will you celebrate?
                </h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    Share your venue details. All fields are optional if you're still looking.
                </p>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5 text-primary" />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="venue-name" className="text-foreground/80">
                        Venue name
                    </Label>
                    <Input
                        id="venue-name"
                        placeholder="e.g. The Grand Estate"
                        value={venueName}
                        onChange={(e) => onChange("venueName", e.target.value )}
                        className="h-11"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="venue-city" className="text-foreground/80">
                            City
                        </Label>
                        <Input
                            id="venue-city"
                            placeholder="City"
                            value={venueCity}
                            onChange={(e) => onChange("venueCity", e.target.value )}
                            className="h-11"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="venue-state" className="text-foreground/80">
                            State
                        </Label>
                        <Input
                            id="venue-state"
                            placeholder="State"
                            value={venueState}
                            onChange={(e) => onChange("venueState", e.target.value )}
                            className="h-11"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}