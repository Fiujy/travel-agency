function ChatbotWidget() {
    return (
        <div className="fixed bottom-4 right-4 z-50 w-[18rem] rounded-2xl border border-amber-300/25 bg-black/90 p-3 shadow-2xl shadow-black/70 sm:bottom-6 sm:right-6">
            <div className="mb-3 flex items-center justify-between">
                <p className="font-serif text-base text-amber-200">Concierge AI</p>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <p className="text-xs leading-relaxed text-neutral-300">
                Need custom travel planning? I can suggest itineraries in under 60 seconds.
            </p>
            <button className="mt-3 w-full rounded-xl bg-amber-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-amber-300">
                Start Chat
            </button>
        </div>
    )
}

export default ChatbotWidget
