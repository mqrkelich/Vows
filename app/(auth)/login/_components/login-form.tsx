"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl text-balance">
                    Welcome back
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                    Sign in to continue planning your dream wedding.
                </p>
            </div>

            <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email address
                    </Label>
                    <Input 
                        id="email"
                        type="email"
                        placeholder="matias@vows.com"
                        className="h-11 bg-secondary/50 border-border placeholder:text-muted-foreground/50 text-foreground"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-sm font-medium text-foreground">
                            Password
                        </Label>

                        <Link
                            href="/forgot-password"
                            className="text-xs text-primary hover:text-primary/80 transition-colors"
                        >
                            Forgot password?                        
                        </Link>
                    </div>

                    <div className="relative">
                        <Input 
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-11 bg-secondary/50 border-border placeholder:text-muted-foreground/50 text-foreground pr-10"
                        />
                        <Button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}

                        </Button>
                    </div>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm tracking-wide mt-1"
                >
                    Sign in
                </Button>

            </form>

            <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                    href="/register"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                    Create one
                </Link>
            </p>
        </div>
    )
}