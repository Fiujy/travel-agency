function HeroSection() {
    const scrollToDestinations = () => {
        const section = document.getElementById('destinations')
        if (!section) {
            return
        }

        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section id="hero" className="relative isolate h-screen min-h-[100svh] scroll-mt-24 overflow-hidden">
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1518544866330-4e4e6f2f3f0f?auto=format&fit=crop&w=2400&q=80')",
                }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/65 to-transparent" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(251,191,36,0.2),transparent_35%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.65)_100%)]" />

            <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="animate-[heroFade_1100ms_ease-out_forwards] text-center opacity-0">
                    <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-amber-200/85 sm:text-xs">
                        Cinematic Time Voyages
                    </p>
                    <h1 className="font-serif text-4xl leading-[1.05] text-amber-100 drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
                        Travel Beyond Time
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-sm text-neutral-100/90 sm:text-lg">
                        Luxury journeys across history
                    </p>
                    <button
                        type="button"
                        onClick={scrollToDestinations}
                        className="mt-8 cursor-pointer rounded-full border border-amber-200/60 bg-amber-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-[0_10px_24px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95 sm:text-sm"
                    >
                        Explore Destinations
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
