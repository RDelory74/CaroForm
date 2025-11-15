README – CaroForm
📌 Présentation du projet

CaroForm est un site vitrine professionnel destiné à présenter les prestations de formation, d’accompagnement et d’analyse de la pratique professionnelle (APP) dans le secteur de la petite enfance.
Le site repose sur un frontend Nuxt 3 moderne et optimisé pour le SEO, un design épuré basé sur TailwindCSS, et un déploiement automatisé via Vercel.

🛠️ Technologies utilisées
Frontend

Nuxt 3 — Framework Vue.js moderne, server-rendered & SEO-friendly

Vue 3 Composition API

TailwindCSS — Framework CSS utilitaire

Nuxt Icon — Gestion des icônes

Outils / Build

Vite — Bundler ultra-rapide

Node.js (version recommandée : 18+)

Déploiement

Vercel — Build automatique sur push GitHub

Preset : vercel-edge / vercel (automatique avec Nuxt 3)

📁 Structure du projet

Voici l’arborescence utile pour la formatrice et pour le développement :

CaroForm/
│
├─ assets/
│   └─ css/main.css               # Style global (géré par Tailwind)
│
├─ components/
│   ├─ ui/                        # Boutons, cards, composants génériques
│   └─ sections/                  # Sections réutilisables
│
├─ pages/
│   ├─ index.vue                  # Page d'accueil
│   ├─ prestations.vue            # Page "Prestations"
│   └─ a-propos.vue               # Page "À propos"
│
├─ public/                        # Images statiques (logo, photo formatrice…)
│
├─ app.vue                        # Layout général
├─ nuxt.config.ts                 # Config Nuxt (modules, build…)
├─ package.json                   # Dépendances du projet
└─ README.md

✏️ Modifier les contenus du site

La formatrice pourra modifier TOUT le contenu dans trois fichiers principaux :

1️⃣ Page d’accueil – /pages/index.vue

Contenu modifiable :

Élément	Où le modifier ?	Exemple / instructions
Phrase d’accroche	Début du template	1 phrase courte (max 70 caractères)
Texte de présentation	Section présentation	1 paragraphe de 3–4 lignes
Image d'accueil	/public/hero.jpg (ou autre)	Remplacer le fichier ou changer le chemin
Bouton principal	props du composant BaseButton	Texte court : “Découvrir mes prestations”
2️⃣ Page Prestations – /pages/prestations.vue

Chaque prestation peut être modifiée facilement dans le tableau de données :

Exemple :

const prestations = [
  {
    titre: "Analyse de la pratique professionnelle (APP)",
    description: "Accompagnement des équipes afin de prendre du recul...",
    image: "/img/app.jpg"
  },
  {
    titre: "Formation continue",
    description: "Modules de formation adaptés aux besoins des structures...",
    image: "/img/formation.jpg"
  }
];


Champs modifiables :

Champ	Description
titre	Intitulé de la prestation
description	Texte détaillant l’accompagnement
image	Image associée à la prestation (dans /public/img/)
3️⃣ Page À propos – /pages/a-propos.vue

Contenu basé sur un texte structuré et simple à mettre à jour.

Champs modifiables :

Élément	Où le modifier ?
Titre / Sous-titre	tout en haut du <template>
Texte biographique	dans le <p> principal
Photo	remplacer /public/caro.jpg
📦 Installation et lancement du projet
✔️ 1. Cloner le projet
git clone https://github.com/RDelory74/CaroForm.git
cd CaroForm

✔️ 2. Installer les dépendances (IMPORTANT)

⚠️ Obligatoire avant tout build
Nuxt 3 utilise des dépendances natives qui peuvent bugger si mal installées.

npm install

✔️ 3. Démarrer le projet en local
npm run dev


Le site sera disponible sur :

http://localhost:3000

✔️ 4. Build du projet
npm run build

✔️ 5. Déploiement sur Vercel

Si tu utilises Vercel :

Le déploiement est automatique à chaque push sur main

Aucune config supplémentaire n’est nécessaire
( Nuxt détecte automatiquement le preset vercel )

Si tu veux lancer un build manuel :

vercel build
vercel deploy --prebuilt

🛠️ Dépendances principales
Nuxt
"nuxt": "^3.x"

Tailwind
"@nuxtjs/tailwindcss": "^6.x"

Icônes, utilitaires
"nuxt-icon": "^1.x"

🎯 Personnalisation future

Le projet a été conçu pour :

Ajouter facilement des pages (contact, blog, FAQ…)

Ajouter des prestas dans un array JS

Modifier textes et images sans toucher à la structure

Être maintenu par une personne non développeuse

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
