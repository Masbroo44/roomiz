# API

Routes proposées, à valider avec le back.

- URL de base : `VITE_API_URL` (voir `.env.example`).
- Déjà appelées par le front : `POST /profiles`, `GET /knocks`,
  `POST /knocks/:id/open`, `GET /conversations` et les messages.

| Fonctionnalité            | Méthode + route                    | Envoyé                                                                                | Reçu                    |
| ------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------- | ----------------------- |
| Créer mon profil          | `POST /profiles`                   | `role` (`seeker` ou `host`), `firstName`, `age`, `city`, `budget`, `interests`, `bio` | Le profil créé          |
| Inscription               | `POST /auth/register`              | Email, mot de passe                                                                   | Token                   |
| Connexion                 | `POST /auth/login`                 | Email, mot de passe                                                                   | Token                   |
| Vérifier mon identité     | `POST /identity`                   | Pièce d'identité                                                                      | Statut Verified Key     |
| Explore                   | `GET /listings`                    | Rien                                                                                  | Liste d'annonces        |
| Fiche annonce             | `GET /listings/:id`                | Rien                                                                                  | L'annonce               |
| Toquer                    | `POST /knocks`                     | Id de l'annonce                                                                       | Le knock créé           |
| Knocks                    | `GET /knocks`                      | Rien                                                                                  | Liste des knocks        |
| Ouvrir la porte           | `POST /knocks/:id/open`            | Rien                                                                                  | La conversation créée   |
| Living Room / Knock Knock | `GET /conversations`               | Rien                                                                                  | Liste des conversations |
| Living Room / Knock Knock | `GET /conversations/:id/messages`  | Rien                                                                                  | Liste des messages      |
| Living Room / Knock Knock | `POST /conversations/:id/messages` | Texte du message                                                                      | Le message créé         |
| Mes critères              | `GET /preferences`                 | Rien                                                                                  | Mes critères            |
| Mes critères              | `PUT /preferences`                 | Mes critères (dont She Space)                                                         | Critères enregistrés    |
| My Room                   | `GET /me/listing`                  | Rien                                                                                  | Mon annonce             |
| My Room                   | `PUT /me/listing`                  | Mon annonce                                                                           | Annonce enregistrée     |

**Données attendues par Knocks, Living Room et Knock Knock** :

- `GET /knocks` : `{ received: [...], sent: [...] }`. Un knock : `id`, `name`,
  `listingTitle`, `isMystery` (Knock Knock), `isOpen` (porte ouverte),
  `conversationId`.
- `POST /knocks/:id/open` : la conversation créée, avec `id` et `name`.
- `GET /conversations` : une conversation a `id`, `knockId`, `name` (pseudonyme
  si Knock Knock), `isMystery`, `photo` (URL d'une photo du logement) et
  `lastMessage`.
- Un message : `id`, `text`, `isMine` (`true` si je l'ai écrit). On envoie
  `{ text }`.

**Auth** : le token est stocké dans `localStorage` sous la clé `token` et envoyé
dans le header `Authorization: Bearer <token>`.

**Erreurs** : chaque appel a un état de chargement, et un message est affiché à
l'utilisateur si l'appel échoue.
