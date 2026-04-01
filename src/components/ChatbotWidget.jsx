import { useEffect, useRef, useState } from 'react'

const initialMessages = [
    {
        id: 1,
        role: 'ai',
        text: 'Welcome to TimeTravel Agency. How can I assist you today?',
    },
]

const suggestions = [
    'Recommend me a destination',
    'Prices',
    'Tell me about Paris 1889',
]

function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState(initialMessages)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isOpen])

    const sendMessage = async (messageText) => {
        const trimmed = messageText.trim()
        if (!trimmed || isLoading) {
            return
        }

        setError('')

        const userMessage = {
            id: Date.now(),
            role: 'user',
            text: trimmed,
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue('')

        try {
            setIsLoading(true)

            let response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: trimmed }),
            })

            if (!response.ok) {
                response = await fetch('http://localhost:3001/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: trimmed }),
                })
            }

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data?.error || 'Unable to get a response right now.')
            }

            const aiMessage = {
                id: Date.now() + 1,
                role: 'ai',
                text: data?.reply || 'I am here to help you plan your next premium time-travel experience.',
            }

            setMessages((prev) => [...prev, aiMessage])
        } catch (requestError) {
            setError(requestError.message || 'Something went wrong while contacting the server.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleSend = async (event) => {
        event.preventDefault()
        await sendMessage(inputValue)
    }

    const handleSuggestionClick = async (suggestion) => {
        await sendMessage(suggestion)
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
            <div
                className={`mb-3 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-amber-300/25 bg-black/90 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 ${isOpen
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none translate-y-4 scale-95 opacity-0'
                    }`}
            >
                <div className="flex items-center justify-between border-b border-amber-300/20 px-4 py-3">
                    <p className="font-serif text-base text-amber-200">Concierge AI</p>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="gold-hover cursor-pointer rounded-full px-2 py-1 text-xs uppercase tracking-[0.16em] text-amber-200 duration-[600ms] ease-in-out hover:bg-amber-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95"
                    >
                        Close
                    </button>
                </div>

                <div className="h-72 space-y-3 overflow-y-auto px-4 py-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${message.role === 'user'
                                ? 'ml-auto bg-amber-400 text-black'
                                : 'mr-auto border border-amber-300/30 bg-neutral-900 text-neutral-100'
                                }`}
                        >
                            {message.text}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="mr-auto max-w-[85%] rounded-2xl border border-amber-300/30 bg-neutral-900 px-3 py-2 text-sm leading-relaxed text-neutral-100">
                            AI is typing...
                        </div>
                    )}
                    {error && (
                        <div className="mr-auto max-w-[85%] rounded-2xl border border-red-400/40 bg-red-950/50 px-3 py-2 text-sm leading-relaxed text-red-200">
                            {error}
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-amber-300/15 px-3 py-2">
                    <div className="flex flex-wrap gap-2">
                        {suggestions.map((suggestion) => (
                            <button
                                key={suggestion}
                                type="button"
                                onClick={() => handleSuggestionClick(suggestion)}
                                disabled={isLoading}
                                className="gold-hover cursor-pointer rounded-full border border-amber-300/30 bg-transparent px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-amber-200 duration-[600ms] ease-in-out hover:bg-amber-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSend} className="border-t border-amber-300/20 p-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            placeholder="Ask your time-travel concierge..."
                            disabled={isLoading}
                            className="w-full rounded-xl border border-amber-300/30 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-amber-300"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="gold-hover cursor-pointer rounded-xl bg-amber-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black duration-[600ms] ease-in-out hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>

            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="gold-hover ml-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-amber-300/40 bg-black/95 text-amber-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)] duration-[600ms] ease-in-out hover:scale-105 hover:bg-amber-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 active:scale-95"
                aria-label="Toggle chatbot"
            >
                AI
            </button>
        </div>
    )
}

export default ChatbotWidget
