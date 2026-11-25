// Knocks d'exemple.
// accountId : le compte qui voit ce knock dans son onglet Knocks.
// isReceived : true si on a toqué chez moi, false si c'est moi qui ai toqué
// (listingId est alors le logement où j'ai toqué).
// realName : le prénom caché derrière le pseudonyme d'un Knock Knock.
export const knocks = [
  {
    id: 1,
    accountId: 1,
    isReceived: false,
    listingId: 1,
    name: 'Mehdi',
    listingTitle: 'Chambre lumineuse à la Croix-Rousse',
    isMystery: false,
    isOpen: true,
    conversationId: 1,
  },
  {
    id: 2,
    accountId: 1,
    isReceived: false,
    listingId: 3,
    name: 'Hibou curieux',
    realName: 'Tom',
    listingTitle: 'Studio partagé à Confluence',
    isMystery: true,
    isOpen: false,
    conversationId: 2,
  },
  {
    id: 3,
    accountId: 1,
    isReceived: false,
    listingId: 4,
    name: 'Jade',
    listingTitle: 'Chambre calme à Villeurbanne',
    isMystery: false,
    isOpen: false,
    conversationId: null,
  },
  {
    id: 4,
    accountId: 2,
    isReceived: true,
    name: 'Camille',
    listingTitle: 'Chambre au calme à la Guillotière',
    isMystery: false,
    isOpen: false,
    conversationId: null,
  },
  {
    id: 5,
    accountId: 2,
    isReceived: true,
    name: 'Nora',
    listingTitle: 'Chambre au calme à la Guillotière',
    isMystery: false,
    isOpen: true,
    conversationId: 3,
  },
]
