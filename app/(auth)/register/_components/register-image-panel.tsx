import Image from "next/image";

export function RegisterImagePanel() {

    return (
        <div className="relative hidden lg:block h-full w-full overflow-hidden">
            <Image
                src={"/register.jpg"}
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
                        Every detail,<br/>
                        <span className="italic">perfectly planned</span>
                    </p>

                    <p className="text-sm text-foreground/70 max-w-sm leading-relaxed">
                        From the first consultation to the final toast, we bring your vision to life with care and elegance.
                    </p>
                </div>
            </div>
            
        </div>
    )

}