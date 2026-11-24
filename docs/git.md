# Git

## Branches

- `main` : version stable.
- `develop` : intégration.
- `feature/xxx` : une branche par membre, créée depuis `develop`.

```bash
git switch develop && git pull
git switch -c feature/explore
```

## Pull Requests

- Toujours vers `develop`.
- Relue par au moins un membre.
- Avant chaque PR : `npm run lint` et `npm run build` passent.
- `main` est mis à jour seulement avec une version qui marche.

## Commits

- Petits, un sujet par commit.
- Format Conventional Commits, en français.
- Types : `feat`, `fix`, `chore`, `docs`, `style`, `refactor`.
- Exemple : `feat(explore): ajoute la carte de logement`
