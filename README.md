# Cabinet IT — Conseil, Intégration & Formation · Lomé, Togo

> Site web officiel du Cabinet IT — cabinet de conseil et de formation IT basé à Lomé, Togo.
> Développé avec **Vue.js** et **Nuxt.js**.

---

## Aperçu

Le site présente les services, formations et expertises du Cabinet IT :

- **Vitrine d'expertise** — présentation des 6 services IT (Audit, Cloud, Cybersécurité, Développement, Data & BI, Support)
- **Vitrine de formation** — formations professionnelles certifiantes (AWS, Cybersécurité, Data Science, DevOps, Gestion de projet IT)
- **Demande de devis** — formulaire interactif multi-étapes
- **Contact** — coordonnées, carte Lomé, messagerie instantanée
- **FAQ & Témoignages** — questions fréquentes et avis clients

---

## Stack technique

- [Nuxt.js 2](https://nuxtjs.org) — framework Vue.js SSR
- [Vue.js 2](https://vuejs.org) — framework JavaScript
- Bootstrap 3 — grille et composants UI
- jQuery + plugins (OWL Carousel, WOW.js, Venobox, MagnificPopup)

---

## Installation

Vous devez avoir **Node.js** et **npm** installés sur votre machine.

Installez les dépendances depuis la racine du projet :

```bash
$ npm install
```

---

## Serveur de développement

Lancez le serveur local avec :

```bash
$ npm run dev
```

Accédez au site sur [http://localhost:3000](http://localhost:3000).  
Le site se recharge automatiquement à chaque modification des fichiers source.

---

## Générer le site statique

```bash
$ npm run generate
```

---

## Build pour la production

```bash
$ npm run build
$ npm run start
```

---

## Structure du projet

```
cabinet-it/
├── components/
│   ├── Common/       → Composants partagés (LogoSVG, etc.)
│   ├── Home/         → Composants de la page d'accueil
│   └── Page/         → Composants des pages internes
├── layouts/          → Layout principal (default.vue)
├── pages/            → Pages du site (chaque fichier = une route)
├── static/           → Assets publics (images, CSS, JS)
├── plugins/          → Plugins Vue.js
├── store/            → Store Vuex
└── nuxt.config.js    → Configuration Nuxt
```

---

## Contact

**Cabinet IT** — Lomé, Togo  
Email : contact@cabinet-it.tg  
Tél : +228 90 00 00 00  
Horaires : Lun - Ven · 8h00 - 18h00

---

Pour plus d'informations sur le framework utilisé, consultez la [documentation Nuxt.js](https://nuxtjs.org).
