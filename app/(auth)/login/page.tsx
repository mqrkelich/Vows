import Link from "next/link";
import { LoginForm } from "./_components/login-form";
import { LoginImagePanel } from "./_components/login-image-panel";

export default function LoginPage() {
    return (
        <main className="flex min-h-svh bg-background">
            <div className="flex flex-1 flex-col justify-between px-6 py-8 lg:px-16 xl:px-24">
                <Link href="/" className="inline-block">
                    <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
                        Vows
                    </span>
                </Link>

                <div className="mx-auto w-full max-w-sm">
                    <LoginForm/>
                </div>

                <footer className="flex items-center justify-between text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Vows. All rights reserved.</p>
                </footer>
            </div>

            <div className="hidden lg:flex lg:w-1/2 xl:w-[55%]">
                <LoginImagePanel/>
            </div>

        </main>
    )
}