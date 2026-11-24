# Roomiz — front-end

App mobile-first de colocation en mode « swipe » : on swipe des logements, pas
des personnes.

Stack : Vite + React (JavaScript), React Router v6, CSS Modules, PWA
(vite-plugin-pwa).

## Documentation

- [Choix techniques](docs/choix-techniques.md)
- [Fonctionnalités](docs/fonctionnalites.md)
- [API](docs/api.md)
- [Architecture](docs/architecture.md)
- [Répartition](docs/repartition.md)
- [Git](docs/git.md)
- [Charte UI](docs/charte-ui.md)

## Installation

Il faut Node.js 20.19 ou plus récent.

```bash
npm install
cp .env.example .env   # URL de l'API (VITE_API_URL)
npm run dev            # http://localhost:5173
```

## Scripts

| Commande          | Rôle                                    |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Lance le serveur de développement       |
| `npm run build`   | Construit l'app dans `dist/`            |
| `npm run preview` | Sert le build pour le vérifier          |
| `npm run lint`    | Vérifie le code avec ESLint             |
| `npm run format`  | Met en forme tout le code avec Prettier |

## Tester sur téléphone (PWA)

Roomiz est une PWA : elle s'installe sur l'écran d'accueil et s'ouvre en plein
écran. Le service worker n'existe que dans le build, pas avec `npm run dev`.

```bash
npm run build && npm run preview -- --host
```

1. Le terminal affiche une adresse « Network » (ex : `http://192.168.1.20:4173`).
2. Ouvre-la sur ton téléphone, connecté au même Wi-Fi que ton ordinateur.
3. Dans le menu du navigateur, choisis « Ajouter à l'écran d'accueil », puis
   lance Roomiz depuis son icône.

À savoir :

- En `http` sur le Wi-Fi, le service worker (cache des fichiers) ne s'active
  pas : il lui faut `https` ou `localhost`. L'iPhone ouvre quand même l'app en
  plein écran ; sur Android, l'installation complète demande `https`.
- Sur le téléphone, `localhost` désigne le téléphone. Pour que l'API réponde,
  mets l'adresse IP de ton ordinateur dans `VITE_API_URL` avant le build.

## Arborescence

```
src/
  api/          client.js (fetch commun) + un fichier par ressource (profile.js)
  components/   composants partagés : Button, Chip, Input, Toggle, TabBar
  context/      réservé à AuthContext
  hooks/        hooks maison
  pages/        un dossier par écran : Home, CreateProfile, Explore, Knocks,
                LivingRoom, MyRoom
  styles/       tokens.css (variables Ocean Glow) + global.css
  App.jsx       routes
  main.jsx      point d'entrée
```

La config de la PWA (manifest) est dans `vite.config.js`, ses icônes dans
`public/`.

## Composants partagés

| Composant | Props                                                                                        |
| --------- | -------------------------------------------------------------------------------------------- |
| `Button`  | `variant` (`primary` ou `secondary`), `type`, `disabled`, `onClick`                          |
| `Chip`    | `isSelected`, `onClick`                                                                      |
| `Input`   | `label`, `id`, `value`, `onChange`, `error`, `type`, `placeholder`, `inputMode`, `multiline` |
| `Toggle`  | `label`, `id`, `checked`, `onChange`                                                         |
| `TabBar`  | aucune                                                                                       |

`onChange` de `Input` et `Toggle` reçoit directement la valeur, pas l'événement :

```jsx
<Input label="Ville" id="city" value={city} onChange={setCity} error={error} />
<Toggle label="She Space" id="sheSpace" checked={isOn} onChange={setIsOn} />
```

## Conventions

**Code**

- Composants en fonctions fléchées, props déstructurées, `export default`.
- Composants en `PascalCase`, variables et fonctions en `camelCase` anglais
  (`handleSubmit`, `isLoading`, `errorMessage`). Textes affichés en français.
- Un composant = un dossier : `Composant.jsx` + `Composant.module.css`.
- 80 lignes max par composant. Au-delà, on découpe.
- Couleurs, rayons et espacements : toujours les variables de `tokens.css`.
- Mobile d'abord : zones tactiles de 44px minimum, champs de saisie en 16px
  minimum (sinon iOS zoome au focus).
- Les appels à l'API passent par `src/api/`, jamais de `fetch` dans un composant.
- Pas de nouvelle dépendance sans en parler à l'équipe.

**Pages**

- Un dossier par écran dans `src/pages/`. Les sous-composants propres à un écran
  restent dans son dossier (ex : `CreateProfile/InterestChips.jsx`).
- Chaque page commence par une balise `<main>`.
- Une nouvelle page = une nouvelle `<Route>` dans `App.jsx`. Placée dans
  `TabsLayout`, elle affiche la TabBar.

**Composants partagés**

- `src/components/` est géré par Samuel. Besoin d'un changement ou d'un nouveau
  composant ? Demande-lui plutôt que de le modifier sur ta branche.

**Git**

- On part toujours de `develop` : `git switch develop && git pull`, puis
  `git switch -c feature/nom-de-la-feature`.
- Commits courts au format Conventional Commits, en français :
  `feat(explore): ajoute la carte de logement`.
- Avant chaque commit : `npm run lint` et `npm run build` doivent passer.
- On ne pousse jamais directement sur `main` ni sur `develop`.

**Vocabulaire Roomiz**

Toquer (liker), Porte ouverte ! (match), Knock Knock (match mystère), Vibe Check
(score), Verified Key (badge identité), She Space (colocation 100 % femmes),
Roomies (candidats).
