# Modèle de site vitrine (Next.js)

Modèle réutilisable pour créer un site vitrine : 4 pages (Accueil, Services, À propos, Contact),
adapté au mobile, avec bouton WhatsApp.

## Pour un nouveau client

1. Copier ce dossier (ou "Use this template" sur GitHub), le renommer au nom du client.
2. Ouvrir `src/site.config.js` et remplacer **tout le contenu** : nom, téléphone, WhatsApp,
   horaires, services, texte "À propos", couleurs, et les libellés de la section services (ex. "Menu" pour un restaurant).
3. Remplacer l'icône dans `src/app/icon.svg` si le client a un logo.
4. Lancer le site en local :

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Mettre en ligne

```bash
npm run build
```

Le dossier `out/` contient le site final (fichiers statiques). On peut l'héberger gratuitement
(Cloudflare Pages, Netlify, GitHub Pages, Vercel) en le connectant au dépôt Git du projet.

## Checklist avant livraison

- [ ] Toutes les infos de `site.config.js` sont celles du client (aucun texte "à remplacer")
- [ ] Le numéro WhatsApp fonctionne (tester le bouton depuis un téléphone)
- [ ] Le lien "Voir sur la carte" ouvre le bon endroit
- [ ] Le site s'affiche bien sur téléphone et sur ordinateur
- [ ] Le nom de domaine pointe vers le site
