# Portfolio d'Andy Azerot

Portfolio personnel construit avec React, TypeScript, Vite et Tailwind CSS. Il présente le profil professionnel, les compétences, les projets récents, l'expérience et les moyens de contact.

## Présentation

Ce projet a pour objectif de mettre en avant :

- les compétences techniques de l'auteur,
- ses projets réalisés,
- son parcours professionnel,
- son CV téléchargeable,
- ses réseaux sociaux et ses coordonnées de contact.

## Stack technique

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons

## Fonctionnalités

- mise en page moderne et responsive,
- navigation entre les sections du portfolio,
- affichage des projets avec technologies associées,
- section d'expérience et de compétences,
- bouton de téléchargement du CV au format PDF,
- formulaire de contact visuel avec état de soumission.

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

- Node.js (version recommandée : 20+)
- npm

## Installation

```bash
npm install
```

## Scripts disponibles

### Lancer le projet en mode développement

```bash
npm run dev
```

### Construire la version de production

```bash
npm run build
```

### Vérifier le formatage et les règles ESLint

```bash
npm run lint
```

## Formulaire de contact

Le formulaire utilise [EmailJS](https://www.emailjs.com/) directement depuis le navigateur ; aucun backend n'est nécessaire.

1. Dans EmailJS, créez un service relié à la boîte `andy.azerot@gmail.com` et un modèle d'e-mail.
2. Configurez le destinataire directement dans le modèle EmailJS, sans utiliser de variable `to_email` fournie par le navigateur.
3. Le modèle doit utiliser les variables `{{from_name}}`, `{{reply_to}}`, `{{subject}}` et `{{message}}`. Définissez `{{reply_to}}` comme adresse de réponse.
4. Copiez `.env.example` vers `.env.local`, puis renseignez les identifiants publics EmailJS.
5. Dans Vercel, créez les mêmes variables d'environnement pour les environnements Production, Preview et Development, puis redéployez.

Le formulaire applique un honeypot et une limite locale d'un envoi toutes les 30 secondes. Activez aussi les protections anti-spam et les limites proposées dans le tableau de bord EmailJS.

## Structure du projet

```text
src/
  components/    - composants réutilisables
  datas/         - données statiques des sections
  layouts/       - sections du portfolio
  assets/        - images et visuels
  types/         - types TypeScript
public/          - fichiers publics
```

## Déploiement

Le projet est prêt à être déployé sur une plateforme statique comme Vercel ou Netlify.

## Contact

- Email : andy.azerot@gmail.com
- LinkedIn : https://www.linkedin.com/in/andy-azerot-591743269/
- GitHub : https://github.com/andy123-glitch
