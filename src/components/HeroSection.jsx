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
                        "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=80')",
                }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/75 to-black" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_42%)]" />

            <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="animate-[heroFade_1100ms_ease-out_forwards] text-center opacity-0">
                    <h1 className="font-serif text-4xl leading-tight text-amber-100 sm:text-6xl lg:text-7xl">
                        TimeTravel Agency
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-sm text-neutral-200 sm:text-lg">
                        Explore history like never before
                    </p>
                    <button
                        type="button"
                        onClick={scrollToDestinations}
                        className="mt-8 cursor-pointer rounded-full border border-amber-300/50 bg-amber-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95 sm:text-sm"
                    >
                        Discover Destinations
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
