// Valeurs de départ du formulaire
export const EMPTY_FORM = {
  firstName: '',
  age: '',
  city: '',
  budget: '',
  interests: [],
  bio: '',
}

// Vérifie le formulaire et retourne un objet { champ: message d'erreur }.
// L'objet est vide si tout est valide.
export const validateProfile = (form) => {
  const errors = {}

  if (form.firstName.trim().length < 2) {
    errors.firstName = 'Indique ton prénom (2 lettres minimum).'
  }

  // Number('abc') donne NaN et Number('24.5') n'est pas un entier
  const age = Number(form.age)
  if (form.age.trim() === '' || !Number.isInteger(age)) {
    errors.age = 'Indique ton âge en chiffres (ex : 24).'
  } else if (age < 18) {
    errors.age = 'Tu dois avoir au moins 18 ans.'
  }

  if (form.city.trim() === '') {
    errors.city = 'Indique ta ville.'
  }

  const budget = Number(form.budget)
  if (form.budget.trim() === '' || !Number.isInteger(budget)) {
    errors.budget = 'Indique ton budget en chiffres (ex : 550).'
  } else if (budget <= 0) {
    errors.budget = 'Ton budget doit être supérieur à 0 €.'
  }

  if (form.interests.length === 0) {
    errors.interests = "Choisis au moins un centre d'intérêt."
  }

  if (form.bio.length > 200) {
    errors.bio = 'Ta bio ne doit pas dépasser 200 caractères.'
  }

  return errors
}
