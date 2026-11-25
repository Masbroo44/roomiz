// Logements d'exemple affichés dans Explore et dans la fiche annonce
export const listings = [
  {
    id: 1,
    title: 'Chambre lumineuse à la Croix-Rousse',
    rent: 480,
    charges: 40,
    neighborhood: 'Croix-Rousse',
    description:
      'Chambre meublée de 12 m² dans une coloc de trois, à deux pas du métro.',
    roomPhoto: 'https://picsum.photos/seed/roomiz-1/600/400',
    photos: [
      'https://picsum.photos/seed/roomiz-1/600/400',
      'https://picsum.photos/seed/roomiz-1b/600/400',
    ],
    vibeCheck: 92,
    verifiedKey: true,
    sheSpace: false,
    roommates: [
      { firstName: 'Mehdi', age: 25 },
      { firstName: 'Lou', age: 23 },
    ],
  },
  {
    id: 2,
    title: 'Grande chambre à Monplaisir',
    rent: 520,
    charges: 50,
    neighborhood: 'Monplaisir',
    description:
      'Grande chambre avec balcon dans un appartement refait à neuf, tram au pied de l’immeuble.',
    roomPhoto: 'https://picsum.photos/seed/roomiz-2/600/400',
    photos: [
      'https://picsum.photos/seed/roomiz-2/600/400',
      'https://picsum.photos/seed/roomiz-2b/600/400',
    ],
    vibeCheck: 85,
    verifiedKey: true,
    sheSpace: true,
    roommates: [
      { firstName: 'Inès', age: 22 },
      { firstName: 'Sarah', age: 24 },
    ],
  },
  {
    id: 3,
    title: 'Studio partagé à Confluence',
    rent: 560,
    charges: 60,
    neighborhood: 'Confluence',
    description:
      'Chambre dans un duplex moderne avec vue sur la Saône, salon et cuisine partagés.',
    roomPhoto: 'https://picsum.photos/seed/roomiz-3/600/400',
    photos: [
      'https://picsum.photos/seed/roomiz-3/600/400',
      'https://picsum.photos/seed/roomiz-3b/600/400',
    ],
    vibeCheck: 78,
    verifiedKey: false,
    sheSpace: false,
    roommates: [{ firstName: 'Tom', age: 26 }],
  },
  {
    id: 4,
    title: 'Chambre calme à Villeurbanne',
    rent: 410,
    charges: 35,
    neighborhood: 'Villeurbanne',
    description:
      'Petite chambre au calme près du campus, idéale pour un étudiant, coloc de quatre.',
    roomPhoto: 'https://picsum.photos/seed/roomiz-4/600/400',
    photos: [
      'https://picsum.photos/seed/roomiz-4/600/400',
      'https://picsum.photos/seed/roomiz-4b/600/400',
    ],
    vibeCheck: 70,
    verifiedKey: false,
    sheSpace: false,
    roommates: [
      { firstName: 'Jade', age: 21 },
      { firstName: 'Noah', age: 22 },
      { firstName: 'Élise', age: 23 },
    ],
  },
]
