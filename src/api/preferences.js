import { getCurrentAccount } from './session'
import wait from './wait'

// Critères du compte connecté (null = aucun critère enregistré)
export const getPreferences = async () => {
  await wait()
  return getCurrentAccount().preferences
}

export const updatePreferences = async (preferences) => {
  await wait()
  const account = getCurrentAccount()
  account.preferences = preferences
  return preferences
}

// Annonce du compte connecté (null = pas encore d'annonce)
export const getMyListing = async () => {
  await wait()
  return getCurrentAccount().listing
}

export const updateMyListing = async (listing) => {
  await wait()
  const account = getCurrentAccount()
  account.listing = listing
  return listing
}

// Mon profil (celui de l'écran "Créer mon profil"), affiché dans My Room
export const getMyProfile = async () => {
  await wait()
  const account = getCurrentAccount()
  if (!account.profile) {
    throw new Error('Profil introuvable')
  }
  return account.profile
}
