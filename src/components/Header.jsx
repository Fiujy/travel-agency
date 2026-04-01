const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'Destinations', target: 'destinations' },
    { label: 'Contact', target: 'footer' },
]

function scrollToSection(targetId) {
    const element = document.getElementById(targetId)
    if (!element) {
        return
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b border-amber-400/20 bg-black/70 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <button
                    type="button"
                    onClick={() => scrollToSection('hero')}
                    className="cursor-pointer rounded-full px-2 py-1 font-serif text-lg tracking-[0.3em] text-amber-300 transition hover:bg-amber-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-[0.98] sm:text-xl"
                >
                    NOIR VOYAGE
                </button>

                <nav aria-label="Main navigation">
                    <ul className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-200 sm:gap-6 sm:text-sm">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <button
                                    type="button"
                                    onClick={() => scrollToSection(item.target)}
                                    className="cursor-pointer rounded-full px-3 py-2 transition hover:bg-amber-400/10 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
