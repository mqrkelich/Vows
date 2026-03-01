"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    ChevronLeft,
    CreditCard,
    Home,
    ListTodo,
    MailboxIcon,
    Menu,
    Settings,
    X,
} from "lucide-react"

const navigation = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Guest List", href: "/dashboard/guests", icon: ListTodo },
    { name: "Budget", href: "/dashboard/budget", icon: CreditCard },
    { name: "Invitation Page", href: "/dashboard/invitation", icon: MailboxIcon },
]

const bottomNav = [
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setMobileOpen(true)}
                className="fixed top-4 left-4 z-50 flex items-center justify-center size-10 rounded-lg bg-card border border-border shadow-sm lg:hidden"
                aria-label="Open Navigation"
            >
                <Menu className="size-5 text-foreground" />
            </button>

            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}></div>
            )}

            <div
                className={cn("fixed inset-y-0 left-0 z-50 w-64 flex-col bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0", mobileOpen ? "translate-x-0" : "-translate-x-full")}
            >
                <div className="flex items-center justify-between px-6 py-6">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-serif text-xl font-semibold tracking-wide text-foreground">Vows</span>
                    </Link>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transiton-colors lg:hidden"
                        aria-label="Close Navigation"
                    >
                        <X className="size-4" />
                    </button>
                </div>

                <div className="mx-4 mb-4 rounded-lg bg-secondary/60 px-4 py-3">
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Wedding</p>
                    <p className="mt-0.5 font-serif text-sm text-foreground">Sarah & Matias</p>
                    <p className="text-xs text-muted-foreground mt-0.5">March 15, 2026</p>
                </div>

                <nav className="flex-1 px-3">
                    <div className="flex flex-col gap-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-normal transition-colors", isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent")}
                                >
                                    <item.icon
                                        className={cn(
                                            "size-4 shrink-0", isActive ? "text-primary" : "text-muted-foreground"
                                        )}
                                    />
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </>
    )
}