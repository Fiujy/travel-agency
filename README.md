# TimeTravel Agency - Webapp Interactive

Webapp immersive pour une agence de voyage temporel fictive, orientée luxe et expérience premium.
Le projet inclut une landing page moderne, une galerie de destinations historiques et un chatbot IA connecté à l'API Mistral via une fonction serverless.

## Stack Technique

- React 19 + Vite
- Tailwind CSS v4 (via plugin Vite)
- API serverless Vercel (`/api/chat`)
- Mistral AI API (`mistral-small`)
- Node.js / Express (backend local de dev, optionnel)

## Features Implémentées

- Single Page Application responsive (mobile-first)
- Design dark/luxury (black + gold accents)
- Header avec navigation scroll fluide
- Hero section cinematic avec CTA
- Section "About the Agency"
- Section destinations (3 cards)
- Modale détaillée par destination : image, highlights, pricing
- Chatbot conversationnel avec :
	- message initial
	- suggestions rapides
	- état de chargement
	- gestion d'erreurs
	- auto-scroll des messages
- Animations subtiles (fade-in scroll, hover scale + glow)

## IA Utilisées (Transparence)

- Assistance code : GitHub Copilot (GPT-5.3-Codex)
- Modèle conversationnel chatbot : Mistral Small (API Mistral)

## Installation & Lancement (Local)

### 1) Frontend

```bash
npm install
npm run dev
```

### 2) API locale optionnelle (Express)

Le projet contient aussi un backend local dans `server/`.

```bash
cd server
npm install
```

Créer un fichier `.env` dans `server/` :

```env
MISTRAL_API_KEY=your_key_here
```

Puis lancer :

```bash
node index.js
```

## Déploiement Vercel (Serverless)

- Frontend déployé via build Vite (`dist`)
- Fonction serverless : `api/chat.js`
- Variable d'environnement à configurer sur Vercel :
	- `MISTRAL_API_KEY`

## Crédits

- API IA : Mistral AI (`mistral-small`)
- Image hero : Unsplash
- Assets destinations : fichiers locaux du projet (`src/assets/paris.png`, `src/assets/cretaceous.png`, `src/assets/florence.png`)

## Licence

Projet pédagogique - M1/M2 Digital & IA
