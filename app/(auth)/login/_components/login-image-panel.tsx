import Image from "next/image";

export function LoginImagePanel() {

    return (
        <div className="relative hidden lg:block h-full w-full overflow-hidden">
            <Image
                src={"/login.jpg"}
                alt="Wedding Couple"
                fill
                className="object-cover"
                priority
                sizes="50vw"
            />

            <div className="absolute inset-0 bg-background/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="flex flex-col gap-3">
                    <p className="font-serif text-3xl font-medium text-foreground leading-tight text-balance xl:text-4xl">
                        Your Dream,<br/>
                        <span className="italic">Our Promise</span>
                    </p>

                    <p className="text-sm text-foreground/70 max-w-sm leading-relaxed">
                        We plan your wedding, so you can fully enjoy your day without worrying about the details.
                    </p>
                </div>
            </div>
            
        </div>
    )

}