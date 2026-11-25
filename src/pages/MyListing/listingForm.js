// Valeurs de départ du formulaire
export const EMPTY_LISTING = {
  title: '',
  rent: '',
  charges: '',
  neighborhood: '',
  description: '',
  roomPhoto: '',
  sheSpace: false,
}

// Transforme l'annonce reçue de l'API en valeurs pour le formulaire
export const listingToForm = (listing) => {
  return {
    title: listing.title || '',
    rent: String(listing.rent || ''),
    charges: String(listing.charges ?? ''), // ?? garde le 0, || l'effacerait
    neighborhood: listing.neighborhood || '',
    description: listing.description || '',
    roomPhoto: listing.roomPhoto || '',
    sheSpace: listing.sheSpace || false,
  }
}

// Vérifie le formulaire et retourne un objet { champ: message d'erreur }.
// L'objet est vide si tout est valide.
export const validateListing = (form) => {
  const errors = {}

  if (form.title.trim().length < 5) {
    errors.title = 'Donne un titre à ton annonce (5 caractères minimum).'
  }

  const rent = Number(form.rent)
  if (form.rent.trim() === '' || !Number.isInteger(rent) || rent <= 0) {
    errors.rent = 'Indique le loyer en chiffres (ex : 450).'
  }

  const charges = Number(form.charges)
  if (form.charges.trim() === '' || !Number.isInteger(charges) || charges < 0) {
    errors.charges = 'Indique les charges en chiffres (0 si comprises).'
  }

  if (form.neighborhood === '') {
    errors.neighborhood = 'Choisis le quartier de ta chambre.'
  }

  if (form.description.trim().length < 20) {
    errors.description = 'Décris ta chambre (20 caractères minimum).'
  }

  if (!form.roomPhoto.startsWith('http')) {
    errors.roomPhoto = "Colle le lien d'une photo (il commence par http)."
  }

  return errors
}
