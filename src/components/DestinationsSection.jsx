import { useState } from 'react'
import parisImage from '../assets/paris.png'
import cretaceousImage from '../assets/cretaceous.png'
import florenceImage from '../assets/florence.png'

const destinations = [
    {
        name: 'Paris 1889',
        description: 'Witness the debut of the Eiffel Tower during the Exposition Universelle.',
        details:
            'Your private chronoliner lands at the height of the Belle Epoque, where candlelit salons and couture houses define Parisian prestige. Spend your mornings with a historian-guide tracing the rise of modern architecture around the newly unveiled Eiffel Tower. In the afternoon, enjoy reserved seating at elite exhibitions and champagne tastings curated for high-society travelers. Evenings unfold on a custom Seine cruise with a live string trio and panoramic city views in their original golden age. Every detail is designed for discreet comfort, refined service, and unforgettable historical immersion. This itinerary blends romance, innovation, and timeless elegance in one flawless journey.',
        highlights: [
            'Private Eiffel Tower inauguration access',
            'Belle Epoque gala dinner experience',
            'Exclusive Seine twilight yacht cruise',
        ],
        price: 'EUR 42,900',
        image: parisImage,
    },
    {
        name: 'Cretaceous Period',
        description: 'Step into a world of towering dinosaurs and prehistoric jungles.',
        details:
            'Enter a protected luxury outpost positioned above the Cretaceous canopy, built for absolute safety and extraordinary views. Begin each day with guided observation from reinforced panoramic decks as colossal species move through ancient valleys below. Your expedition includes elite chrono-naturalists who decode behavior, migration, and ecosystem dynamics in real time. Midday is reserved for gourmet field dining in climate-controlled domes surrounded by untouched prehistoric landscapes. At sunset, secure skimmer rides reveal dramatic horizons where giant ferns and volcanic ridges frame the sky. This journey delivers thrilling adventure while maintaining the comfort and exclusivity expected of premium explorers.',
        highlights: [
            'Armored panoramic dinosaur observatory',
            'Private chrono-naturalist expedition team',
            'Sunset skimmer flight over primal valleys',
        ],
        price: 'USD 58,500',
        image: cretaceousImage,
    },
    {
        name: 'Florence Renaissance',
        description: 'Meet master artists in the cultural heart of 15th-century Italy.',
        details:
            'Arrive in Florence during its artistic golden crescendo, when innovation, patronage, and genius converge in every piazza. Your bespoke program grants privileged entry to renowned workshops where sculptors and painters shape the future of European culture. Walk alongside expert curators through palaces, basilicas, and marble halls while learning the stories behind masterworks in their original context. Afternoon experiences include private tastings of noble Tuscan cuisine hosted in restored Renaissance estates. Twilight brings candlelit chamber performances and intimate salon conversations on art, science, and philosophy. This itinerary offers a deeply cultured escape with unmatched sophistication and historical depth.',
        highlights: [
            'Private atelier sessions with masters',
            'After-hours palace and chapel tours',
            'Curated Tuscan culinary salon evenings',
        ],
        price: 'EUR 47,300',
        image: florenceImage,
    },
]

function DestinationsSection() {
    const [selectedDestination, setSelectedDestination] = useState(null)

    return (
        <section id="destinations" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
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
                                className="cursor-pointer pt-1 text-xs uppercase tracking-[0.22em] text-amber-300 transition hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95"
                            >
                                View Details
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {selectedDestination && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm animate-[heroFade_260ms_ease-out_forwards]">
                    <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-amber-300/30 bg-neutral-950 shadow-[0_24px_60px_rgba(0,0,0,0.7)] animate-[heroFade_320ms_ease-out_forwards]">
                        <div className="h-56 sm:h-72">
                            <img
                                src={selectedDestination.image}
                                alt={selectedDestination.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-5 p-6 sm:p-7">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="font-serif text-2xl text-amber-100 sm:text-3xl">{selectedDestination.name}</h3>
                                <p className="rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                                    {selectedDestination.price}
                                </p>
                            </div>

                            <p className="text-sm leading-7 text-neutral-300">{selectedDestination.details}</p>

                            <div>
                                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-amber-300">Highlights</p>
                                <ul className="space-y-2 text-sm text-neutral-200">
                                    {selectedDestination.highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-300" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedDestination(null)}
                            className="mb-6 ml-6 cursor-pointer rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95"
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
