# Architecture

```
public/
src/
  api/
  components/
  pages/
  context/
  data/
  hooks/
  styles/
  App.jsx
  main.jsx
```

## Rôle de chaque dossier

- `public/` : fichiers servis tels quels (favicon, icônes de la PWA).
- `src/api/` : fonctions appelées par les pages, un fichier par ressource
  (`profile.js`). Pas de back : elles lisent et modifient les données de
  `src/data/`.
- `src/data/` : données en dur (comptes de test, logements, knocks,
  discussions).
- `src/components/` : composants partagés (Button, Chip, Input, Toggle, TabBar).
- `src/pages/` : un dossier par écran, avec son CSS et ses sous-composants.
- `src/context/` : réservé à `AuthContext`.
- `src/hooks/` : hooks maison.
- `src/styles/` : variables de la charte (`tokens.css`) et styles globaux
  (`global.css`).
- `src/App.jsx` : les routes.
- `src/main.jsx` : point d'entrée.

## Pourquoi cette organisation

- Un dossier par page : chacun travaille dans le sien, peu de conflits Git.
- Composants partagés au même endroit : même apparence sur tous les écrans.
- Données isolées dans `src/api/` : le jour où il y a un back, seul ce dossier
  change, pas les pages.

## Lancer le projet

Il faut Node.js 20.19 ou plus récent.

```bash
npm install
npm run dev   # http://localhost:5173
```

## Comptes de test

Pas de back : les données sont en dur dans `src/data/`. Pour te connecter :

| E-mail           | Mot de passe | Profil                                      |
| ---------------- | ------------ | ------------------------------------------- |
| `lea@roomiz.fr`  | `lea12345`   | Léa cherche une chambre                     |
| `alex@roomiz.fr` | `alex1234`   | Alex partage une chambre, annonce publiée   |
| `nina@roomiz.fr` | `nina1234`   | Nina partage une chambre, pas encore publié |

- Pour changer de compte, ouvre `/login`.
- Les changements restent en mémoire : recharger la page remet les données
  d'exemple, et un compte créé par l'inscription disparaît.
