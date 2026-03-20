# 🎓 UMO ODAS — Site Vitrine

Site officiel de l'Université Militante ODAS  
**umo.centre-odas.org**

---

## 🚀 DÉMARRAGE RAPIDE (3 étapes)

### Étape 1 — Ouvrir le dossier dans VS Code

1. Décompresse le fichier ZIP du projet
2. Ouvre VS Code
3. Fais **Fichier → Ouvrir le dossier** → sélectionne le dossier `umo-odas-site`

### Étape 2 — Installer les dépendances

Dans le terminal de VS Code (menu **Terminal → Nouveau terminal**), tape :

```bash
npm install
```

⏳ Attends que l'installation se termine (environ 1-2 minutes)

### Étape 3 — Lancer le site en local

```bash
npm run dev
```

Ouvre ton navigateur sur : **http://localhost:3000** 🎉

---

## 📁 Structure du projet

```
src/
├── app/                    ← Pages du site
│   ├── page.js             ← Accueil (/)
│   ├── programme/          ← /programme
│   ├── cohortes/           ← /cohortes
│   ├── candidature/        ← /candidature
│   ├── webinaires/         ← /webinaires
│   ├── ressources/         ← /ressources
│   ├── equipe/             ← /equipe
│   ├── faq/                ← /faq
│   ├── plateforme/         ← /plateforme
│   └── contact/            ← /contact
│
├── components/
│   ├── layout/
│   │   ├── Navbar.js       ← Menu de navigation
│   │   └── Footer.js       ← Pied de page
│   └── sections/
│       ├── HeroSection.js  ← Grande bannière d'accueil
│       └── FeaturesSection.js ← Toutes les autres sections
│
└── app/globals.css         ← Styles globaux + couleurs ODAS
```

---

## 🎨 Couleurs ODAS (charte graphique)

| Couleur           | Code hex  | Usage              |
|-------------------|-----------|--------------------|
| Bleu principal    | `#2129BF` | Titres, boutons    |
| Bleu foncé        | `#37029D` | Fonds sombres      |
| Bleu clair        | `#009BFF` | Dégradés           |
| Turquoise         | `#32C8C8` | Accents            |
| Jaune             | `#FFC800` | CTA, highlights    |

---

## 🌐 Déploiement sur Vercel

1. Va sur **vercel.com** → connecte-toi avec GitHub
2. Clique **New Project** → importe ce dépôt
3. Clique **Deploy** → le site est en ligne en 2 minutes !

---

## ✏️ Modifier le contenu

Pour changer un texte ou une donnée :

- **Textes de la page d'accueil** → `src/components/sections/HeroSection.js`
- **Équipe** → `src/app/equipe/page.js` (modifier le tableau `equipe`)
- **Modules du programme** → `src/app/programme/page.js`
- **FAQ** → `src/app/faq/page.js` (modifier le tableau `faqs`)
- **Statistiques** → `src/components/sections/FeaturesSection.js`

---

## 📞 Support

Développé par **Tanoh Noé** pour le Centre ODAS — 2025
