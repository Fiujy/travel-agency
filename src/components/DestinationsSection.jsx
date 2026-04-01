import { useState } from 'react'
import parisImage from '../assets/paris.png'
import cretaceousImage from '../assets/cretaceous.png'
import florenceImage from '../assets/florence.png'

const destinations = [
    {
        name: 'Paris 1889',
        description: 'Witness the debut of the Eiffel Tower during the Exposition Universelle.',
        details:
            'Sip champagne beside the Seine and experience Belle Epoque elegance as electric lights transform Parisian nights.',
        image: parisImage,
    },
    {
        name: 'Cretaceous Period',
        description: 'Step into a world of towering dinosaurs and prehistoric jungles.',
        details:
            'Travel with expert chrono-guides through lush ancient forests where giant ferns and massive predators define the horizon.',
        image: cretaceousImage,
    },
    {
        name: 'Florence Renaissance',
        description: 'Meet master artists in the cultural heart of 15th-century Italy.',
        details:
            'Walk marble halls with private access to workshops where art, science, and architecture are reshaping human history.',
        image: florenceImage,
    },
]

function DestinationsSection() {
    const [selectedDestination, setSelectedDestination] = useState(null)

    return (
        <section id="destinations" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Destinations</p>
                    <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Chrono Collection</h2>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                {destinations.map((destination) => (
                    <article
                        key={destination.name}
                        className="group overflow-hidden rounded-2xl border border-amber-300/25 bg-neutral-950/75 shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(251,191,36,0.2)]"
                    >
                        <div className="h-56 overflow-hidden">
                            <img
                                src={destination.image}
                                alt={destination.name}
                                loading="lazy"
                                decoding="async"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-3 p-5">
                            <h3 className="font-serif text-2xl text-amber-100">{destination.name}</h3>
                            <p className="text-sm leading-relaxed text-neutral-300">{destination.description}</p>
                            <button
                                type="button"
                                onClick={() => setSelectedDestination(destination)}
                                className="pt-1 text-xs uppercase tracking-[0.22em] text-amber-300 transition hover:text-amber-200"
                            >
                                View Details
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {selectedDestination && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl border border-amber-300/30 bg-neutral-950 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
                        <h3 className="font-serif text-2xl text-amber-100">{selectedDestination.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-300">{selectedDestination.details}</p>
                        <button
                            type="button"
                            onClick={() => setSelectedDestination(null)}
                            className="mt-6 rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-amber-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default DestinationsSection
