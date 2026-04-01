function Footer() {
    return (
        <footer
            id="footer"
            className="border-t border-amber-300/20 bg-black/60 px-4 py-8 backdrop-blur-sm sm:px-6 lg:px-8"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="font-serif text-base text-amber-200">NOIR VOYAGE</p>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                    Crafted itineraries for extraordinary travelers.
                </p>
            </div>
        </footer>
    )
}

export default Footer
