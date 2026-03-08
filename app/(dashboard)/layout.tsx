import { auth } from "@/lib/auth";
import { DashboardSidebar } from "./_components/dashboard-sidebar";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DashboradLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if(!session?.user?.id) {
        redirect('/login')
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { 
            name: true,
            email: true,
            onboardingComplete: true,
            weddingProfile: {
                select: {
                    partner1First: true,
                    partner2First: true,
                    weddingDate: true,
                }
            }
         },
    })

    if(!user?.onboardingComplete) { 
        redirect('/onboarding')
    }

    const coupleLabel = [user.weddingProfile?.partner1First, user.weddingProfile?.partner2First]
        .filter(Boolean)
        .join(" & ") || "Your Wedding"

    return (
        <div className="flex min-h-screen bg-background">
            <DashboardSidebar
                userName={user.name}
                userEmail={user.email}
                coupleLabel={coupleLabel}
                weddingDate={user.weddingProfile?.weddingDate ?? undefined}
            />
            <div className="flex flex-1 flex-col lg:ml-64">
                <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
                    {children}
                </main>
            </div>
        </div>
    )
}