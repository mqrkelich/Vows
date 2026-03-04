"use server"

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { success } from "better-auth";

interface OnboardingData {
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

export async function saveOnboarding(data: OnboardingData)  {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if(!session?.user?.id) {
        return { success: false, error: "Not authenticated" }
    }

    const userId = session.user.id;

    try {
        await prisma.$transaction([
            prisma.weddingProfile.upsert({
                where: { userId },
                create: {
                    userId,
                    partner1First: data.partner1First.trim(),
                    partner1Last: data.partner1Last.trim(),
                    partner2First: data.partner2First.trim(),
                    partner2Last: data.partner2Last.trim(),
                    weddingDate: data.weddingDate || null,
                    notSureYet: data.notSureYet,
                    venueName: data.venueName.trim() || null,
                    venueCity: data.venueCity.trim() || null,
                    venueState: data.venueState.trim() || null,
                    guestCount: data.guestCount || null,
                    budgetRange: data.budgetRange || null,
                    vibes: data.vibes,
                },
                update: {
                    partner1First: data.partner1First.trim(),
                    partner1Last: data.partner1Last.trim(),
                    partner2First: data.partner2First.trim(),
                    partner2Last: data.partner2Last.trim(),
                    weddingDate: data.weddingDate || null,
                    notSureYet: data.notSureYet,
                    venueName: data.venueName.trim() || null,
                    venueCity: data.venueCity.trim() || null,
                    venueState: data.venueState.trim() || null,
                    guestCount: data.guestCount || null,
                    budgetRange: data.budgetRange || null,
                    vibes: data.vibes,
                }
            }),
            prisma.user.update({
                where: { id: userId },
                data: { onboardingComplete: true },
            })
        ])

        return { success: true }
    } catch (error) {
        console.error("Error with saving wedding data: ", error)
        return { success: false, error: "Failed to save wedding details" }
    }

}