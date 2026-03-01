"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            setLoading(false);
            return;
        }

        try {
            const result = await signUp.email({
                email,
                password,
                name: `${firstName} ${lastName}`.trim(),
            });

            console.log(result);

            if (result.error) {
                setError(result.error.message || "Could not create account. Please try again.");
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl text-balance">
                    Begin your journey
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                    Create an account to start planning the wedding of your dreams.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {error && (
                    <div className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="first-name" className="text-sm font-medium text-foreground">
                            First name
                        </Label>

                        <Input 
                            id="first-name"
                            type="text"
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            disabled={loading}
                            className="h-11 bg-secondary/50 border-border placeholder:text-muted-foreground/50 text-foreground"
                        />
                    </div>

                     <div className="flex flex-col gap-2">
                        <Label htmlFor="last-name" className="text-sm font-medium text-foreground">
                            Last name
                        </Label>

                        <Input 
                            id="last-name"
                            type="text"
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            disabled={loading}
                            className="h-11 bg-secondary/50 border-border placeholder:text-muted-foreground/50 text-foreground"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email address
                    </Label>
                    <Input 
                        id="email"
                        type="email"
                        placeholder="matias@vows.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="h-11 bg-secondary/50 border-border placeholder:text-muted-foreground/50 text-foreground"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                        Password
                    </Label>

                    <div className="relative">
                        <Input 
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="At least 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading}
                            className="h-11 bg-secondary/50 border-border placeholder:text-muted-foreground/50 text-foreground pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </button>
                    </div>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm tracking-wide mt-1"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="size-4 animate-spin" />
                            Creating account...
                        </span>
                    ) : (
                        "Create account"
                    )}
                </Button>

            </form>

            <p className="text-center text-sm text-muted-foreground">
                {"Already have an account? "}
                <Link
                    href="/login"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                    Sign in
                </Link>
            </p>
        </div>
    )
}
