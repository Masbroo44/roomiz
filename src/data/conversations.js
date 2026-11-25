// Discussions d'exemple. Chaque conversation appartient à un compte (accountId)
// et vient d'un knock (knockId).
// isMystery : true pour un Knock Knock (anonyme), false pour le Living Room.
export const conversations = [
  {
    id: 1,
    accountId: 1,
    knockId: 1,
    name: 'Mehdi',
    isMystery: false,
    photo: 'https://picsum.photos/seed/roomiz-1/600/400',
    lastMessage: 'Oui, jeudi à 18 h si tu veux.',
  },
  {
    id: 2,
    accountId: 1,
    knockId: 2,
    name: 'Hibou curieux',
    isMystery: true,
    photo: 'https://picsum.photos/seed/roomiz-3/600/400',
    lastMessage: '',
  },
  {
    id: 3,
    accountId: 2,
    knockId: 5,
    name: 'Nora',
    isMystery: false,
    photo: 'https://picsum.photos/seed/roomiz-ma-chambre/600/400',
    lastMessage: 'Parfait, à samedi !',
  },
]
