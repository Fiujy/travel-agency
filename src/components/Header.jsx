const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Contact', href: '#footer' },
]

function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b border-amber-400/20 bg-black/70 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <a href="#hero" className="font-serif text-lg tracking-[0.3em] text-amber-300 sm:text-xl">
                    NOIR VOYAGE
                </a>

                <nav aria-label="Main navigation">
                    <ul className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-200 sm:gap-6 sm:text-sm">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="rounded-full px-3 py-2 transition hover:bg-amber-400/10 hover:text-amber-300"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
