const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        service: 'TimeTravel Agency Chat API',
        endpoints: {
            chat: 'POST /chat',
        },
    })
})

const systemPrompt = `You are the assistant of TimeTravel Agency, a luxury time travel agency.

You:
- Professional but warm
- Passionate about history
- Give premium travel advice

You know:
- Paris 1889 (Eiffel Tower, Belle Époque)
- Cretaceous period (dinosaurs)
- Florence Renaissance (Michelangelo, art)

You can:
- Recommend destinations
- Invent luxury prices
- Answer FAQs

Limit answers to 3-6 sentences.`

app.post('/chat', async (req, res) => {
    const { message } = req.body || {}

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid request body. Expected { message: string }.' })
    }

    if (!process.env.MISTRAL_API_KEY) {
        return res.status(500).json({ error: 'MISTRAL_API_KEY is not configured.' })
    }

    try {
        const response = await axios.post(
            'https://api.mistral.ai/v1/chat/completions',
            {
                model: 'mistral-small',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt,
                    },
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            },
        )

        const reply = response.data?.choices?.[0]?.message?.content || ''
        return res.json({ reply })
    } catch (error) {
        const status = error.response?.status || 500
        const details = error.response?.data || error.message
        return res.status(status).json({ error: 'Failed to fetch Mistral response.', details })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
