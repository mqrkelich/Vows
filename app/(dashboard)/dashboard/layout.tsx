import { DashboardSidebar } from "../_components/dashboard-sidebar";

export default function DashboradLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <DashboardSidebar />
            <div className="flex flex-1 flex-col lg:ml-64">
                <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
                    {children}
                </main>
            </div>
        </div>
    )
}