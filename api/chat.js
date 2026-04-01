const SYSTEM_PROMPT = `You are the assistant of TimeTravel Agency, a luxury time travel agency.

- Professional and warm
- Passionate about history
- Recommend destinations
- Invent luxury prices

Keep answers between 3-6 sentences.`

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { message } = req.body || {}
    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid request body. Expected { message }.' })
    }

    if (!process.env.MISTRAL_API_KEY) {
        return res.status(500).json({ error: 'MISTRAL_API_KEY is not configured.' })
    }

    try {
        const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'mistral-small',
                messages: [
                    {
                        role: 'system',
                        content: SYSTEM_PROMPT,
                    },
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            }),
        })

        const data = await response.json()

        if (!response.ok) {
            return res.status(response.status).json({
                error: 'Failed to fetch Mistral response.',
                details: data,
            })
        }

        return res.status(200).json({
            reply: data?.choices?.[0]?.message?.content || '',
        })
    } catch (error) {
        return res.status(500).json({ error: 'Error with AI', details: error.message })
    }
}
