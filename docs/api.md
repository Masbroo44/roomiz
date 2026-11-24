# API

Routes proposées, à valider avec le back.

- URL de base : `VITE_API_URL` (voir `.env.example`).
- Déjà appelée par le front : `POST /profiles` seulement.

| Fonctionnalité            | Méthode + route                    | Envoyé                                                                                | Reçu                 |
| ------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------- | -------------------- |
| Créer mon profil          | `POST /profiles`                   | `role` (`seeker` ou `host`), `firstName`, `age`, `city`, `budget`, `interests`, `bio` | Le profil créé       |
| Inscription               | `POST /auth/register`              | Email, mot de passe                                                                   | Token                |
| Connexion                 | `POST /auth/login`                 | Email, mot de passe                                                                   | Token                |
| Vérifier mon identité     | `POST /identity`                   | Pièce d'identité                                                                      | Statut Verified Key  |
| Explore                   | `GET /listings`                    | Rien                                                                                  | Liste d'annonces     |
| Fiche annonce             | `GET /listings/:id`                | Rien                                                                                  | L'annonce            |
| Toquer                    | `POST /knocks`                     | Id de l'annonce                                                                       | Le knock créé        |
| Knocks                    | `GET /knocks`                      | Rien                                                                                  | Liste des knocks     |
| Living Room / Knock Knock | `GET /conversations/:id/messages`  | Rien                                                                                  | Liste des messages   |
| Living Room / Knock Knock | `POST /conversations/:id/messages` | Texte du message                                                                      | Le message créé      |
| Mes critères              | `GET /preferences`                 | Rien                                                                                  | Mes critères         |
| Mes critères              | `PUT /preferences`                 | Mes critères (dont She Space)                                                         | Critères enregistrés |
| My Room                   | `GET /me/listing`                  | Rien                                                                                  | Mon annonce          |
| My Room                   | `PUT /me/listing`                  | Mon annonce                                                                           | Annonce enregistrée  |

**Auth** : le token est stocké dans `localStorage` sous la clé `token` et envoyé
dans le header `Authorization: Bearer <token>`.

**Erreurs** : chaque appel a un état de chargement, et un message est affiché à
l'utilisateur si l'appel échoue.
