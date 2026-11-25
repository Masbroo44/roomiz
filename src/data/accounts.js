// Comptes de test. Tout ce qui appartient à un compte est rangé dedans :
// son profil, ses critères (preferences) et son annonce (listing).
// null = pas encore rempli.
export const accounts = [
  {
    id: 1,
    email: 'lea@roomiz.fr',
    password: 'lea12345',
    profile: {
      role: 'seeker',
      firstName: 'Léa',
      age: 22,
      city: 'Lyon',
      budget: 600,
      interests: ['Sport', 'Cinéma', 'Voyages'],
      bio: 'Étudiante en design, je cherche une coloc conviviale.',
    },
    preferences: {
      maxBudget: 600,
      neighborhoods: ['Croix-Rousse', 'Part-Dieu'],
      moveInDate: '2027-01-04',
      sheSpace: false,
    },
    listing: null,
  },
  {
    id: 2,
    email: 'alex@roomiz.fr',
    password: 'alex1234',
    profile: {
      role: 'host',
      firstName: 'Alex',
      age: 24,
      city: 'Lyon',
      budget: 550,
      interests: ['Cuisine', 'Musique'],
      bio: 'Calme la semaine, cuisine le dimanche.',
    },
    preferences: null,
    listing: {
      title: 'Chambre au calme à la Guillotière',
      rent: 450,
      charges: 30,
      neighborhood: 'Guillotière',
      description:
        'Chambre de 11 m² avec bureau, dans une coloc de deux près des quais.',
      roomPhoto: 'https://picsum.photos/seed/roomiz-ma-chambre/600/400',
      sheSpace: false,
    },
  },
  {
    id: 3,
    email: 'nina@roomiz.fr',
    password: 'nina1234',
    profile: {
      role: 'host',
      firstName: 'Nina',
      age: 26,
      city: 'Lyon',
      budget: 500,
      interests: ['Lecture', 'Jardinage'],
      bio: 'Je libère une chambre dans mon appartement en janvier.',
    },
    preferences: null,
    listing: null,
  },
]
