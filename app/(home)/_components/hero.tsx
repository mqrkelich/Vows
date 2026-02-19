import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
        <Image
            src={"/hero.jpg"}
            alt="Wedding Couple"
            width={2070}
            height={1380}
            className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/60"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 pb-12 flex flex-col justify-end">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 w-full">
                <h1 className="font-serif text-6xl md:text-8xl text-white leading-[0.95] tracking-tight w-full md:w-2/3 drop-shadow-sm">
                    Your Dream,<br/>
                    <span className="italic font-light">Our Promise</span>
                </h1>

                <div className="w-full md:w-1/3 text-stone-100 md:text-right pb-2">
                    <p className="text-lg md:text-xl font-light leading-relaxed text-shadow-sm">
                        We plan your wedding, so you can fully enjoy your day without worrying about the details.
                    </p>
                </div>

            </div>
        </div>
        
    </section>
  );
}
