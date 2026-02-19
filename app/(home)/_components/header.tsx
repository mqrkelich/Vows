import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <div className="bg-stone-900/30 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 w-full max-w-6xl flex items-center justify-between shadow-xl">
        
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                { /* Add logo later */ }
                <span className="text-white font-medium tracking-tight text-sm uppercase hidden sm:block">Vows</span>
            </div>    

            <div className="hidden md:flex items-center gap-8">
                <a href="/" className="text-stone-100 hover-text-white text-sm font-normal tracking-wide transition-colors">Home</a>
                <a href="/" className="text-stone-100 hover-text-white text-sm font-normal tracking-wide transition-colors">About</a>
                <a href="/" className="text-stone-100 hover-text-white text-sm font-normal tracking-wide transition-colors">Services</a>
            </div>

            <div className="flex items-center gap-4">
                <a href="/login"><Button className="bg-white text-stone-900 px-5 py-2 rounded-full text-xs font-medium hover:bg-stone-100 transition-colors shadow-lg cursor-pointer">Start now</Button></a>
            </div>

        </div>
    </nav>
  );
}
