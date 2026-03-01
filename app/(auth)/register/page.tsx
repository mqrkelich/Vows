import Link from "next/link";
import { RegisterForm } from "./_components/register-form";
import { RegisterImagePanel } from "./_components/register-image-panel";


export default function RegisterPage() {
    return (
        <main className="flex min-h-svh bg-background">
            <div className="flex flex-1 flex-col justify-between px-6 py-8 lg:px-16 xl:px-24">
                <Link href="/" className="inline-block">
                    <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
                        Vows
                    </span>
                </Link>

                <div className="mx-auto w-full max-w-sm">
                    <RegisterForm/>
                </div>

                <footer className="flex items-center justify-between text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Vows. All rights reserved.</p>
                </footer>
            </div>

            <div className="hidden lg:flex lg:w-1/2 xl:w-[55%]">
                <RegisterImagePanel/>
            </div>

        </main>
    )
}