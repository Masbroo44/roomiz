// Valeurs de départ du formulaire
export const EMPTY_PREFERENCES = {
  maxBudget: '',
  neighborhoods: [],
  moveInDate: '',
  sheSpace: false,
}

// Transforme les critères reçus de l'API en valeurs pour le formulaire
export const preferencesToForm = (preferences) => {
  return {
    maxBudget: String(preferences.maxBudget || ''),
    neighborhoods: preferences.neighborhoods || [],
    moveInDate: preferences.moveInDate || '',
    sheSpace: preferences.sheSpace || false,
  }
}

// Vérifie le formulaire et retourne un objet { champ: message d'erreur }.
// L'objet est vide si tout est valide.
export const validatePreferences = (form) => {
  const errors = {}

  const maxBudget = Number(form.maxBudget)
  if (form.maxBudget.trim() === '' || !Number.isInteger(maxBudget)) {
    errors.maxBudget = 'Indique ton budget max en chiffres (ex : 550).'
  } else if (maxBudget <= 0) {
    errors.maxBudget = 'Ton budget max doit être supérieur à 0 €.'
  }

  return errors
}
