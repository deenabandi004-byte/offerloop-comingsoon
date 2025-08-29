import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/ui/WaitlistModal";


const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-[-2] bg-grid-subtle opacity-60" />
      <div aria-hidden className="absolute inset-0 pointer-events-none z-[-1] bg-noise-subtle opacity-20" />
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none opacity-70">
        <div className="brand-orb animate-orb w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] mx-auto mt-[-15vh]" />
      </div>

      {/* Top left legal links */}
      <nav className="absolute top-6 left-6 z-10 flex flex-col gap-2">
        <a 
          href="/privacy-policy" 
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a 
          href="/terms-of-service" 
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Terms of Service
        </a>
      </nav>

      <section className="container px-6">
        <div className="mx-auto max-w-2xl text-center space-y-5">
          <div className="relative inline-block mx-auto">
            <span aria-hidden className="brand-halo" />
            <img
              src="/lovable-uploads/ac562722-41e0-4f2f-82fb-fd686f9dd01c.png"
              alt="Offerloop.ai logo"
              width={160}
              height={160}
              loading="lazy"
              className="relative rounded-xl animate-fade-in mix-blend-multiply dark:mix-blend-screen opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-brand animate-fade-in" style={{ animationDelay: "60ms" }}>Offerloop.ai — Coming Soon</h1>
          <p className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: "120ms" }}>The future of personalized outreach is almost here.</p>

          <div className="pt-2 animate-fade-in" style={{ animationDelay: "180ms" }}>
            <div className="flex items-center justify-center gap-3">
              <WaitlistModal />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with legal links */}
      <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center gap-4 text-sm text-muted-foreground/70">
          <a 
            href="/privacy-policy" 
            className="hover:text-muted-foreground transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <span>•</span>
          <a 
            href="/terms-of-service" 
            className="hover:text-muted-foreground transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;