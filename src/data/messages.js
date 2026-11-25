// Messages d'exemple, rangés par conversation (conversationId).
// isMine : true si c'est le compte connecté qui a écrit le message.
export const messages = [
  // Léa et Mehdi (Living Room)
  {
    id: 1,
    conversationId: 1,
    text: 'Salut ! La chambre est libre en janvier.',
    isMine: false,
  },
  {
    id: 2,
    conversationId: 1,
    text: 'Super, je peux la visiter cette semaine ?',
    isMine: true,
  },
  {
    id: 3,
    conversationId: 1,
    text: 'Oui, jeudi à 18 h si tu veux.',
    isMine: false,
  },

  // Léa et Hibou curieux (Knock Knock) : chaque message répond à une question
  {
    id: 4,
    conversationId: 2,
    text: 'Plutôt oiseau de nuit, mais discret.',
    isMine: false,
  },
  {
    id: 5,
    conversationId: 2,
    text: 'Couche-tôt, je me lève à 7 h.',
    isMine: true,
  },
  {
    id: 6,
    conversationId: 2,
    text: 'Un planning sur le frigo, chacun sa semaine.',
    isMine: false,
  },
  {
    id: 7,
    conversationId: 2,
    text: 'Parfois, et toujours en prévenant.',
    isMine: false,
  },
  {
    id: 8,
    conversationId: 2,
    text: 'Repas partagés le dimanche soir.',
    isMine: false,
  },
  {
    id: 9,
    conversationId: 2,
    text: 'Marché le matin, film le soir.',
    isMine: false,
  },

  // Alex et Nora (Living Room)
  {
    id: 10,
    conversationId: 3,
    text: 'Bonjour ! Ta chambre est toujours libre ?',
    isMine: false,
  },
  {
    id: 11,
    conversationId: 3,
    text: 'Oui, tu peux passer la voir samedi matin.',
    isMine: true,
  },
  { id: 12, conversationId: 3, text: 'Parfait, à samedi !', isMine: false },
]
