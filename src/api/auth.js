import { accounts } from '../data/accounts'
import { makeToken, visitor } from './session'
import wait from './wait'

export const register = async (email, password) => {
  await wait()
  const cleanEmail = email.trim().toLowerCase()
  const isTaken = accounts.some((account) => account.email === cleanEmail)
  if (isTaken) {
    throw new Error('Cette adresse e-mail a déjà un compte')
  }

  // Le profil créé juste avant (écran "Créer mon profil") va dans le compte
  accounts.push({
    id: Date.now(),
    email: cleanEmail,
    password,
    profile: visitor.profile,
    preferences: null,
    listing: null,
  })
  visitor.profile = null
  return { message: 'Compte créé' }
}

export const login = async (email, password) => {
  await wait()
  const cleanEmail = email.trim().toLowerCase()
  const account = accounts.find(
    (item) => item.email === cleanEmail && item.password === password,
  )
  if (!account) {
    throw new Error('E-mail ou mot de passe incorrect')
  }
  return { token: makeToken(account), user: account.profile }
}

// La photo envoyée n'est pas gardée : l'identité est toujours validée
export const sendIdentity = async () => {
  await wait()
  return { status: 'verified' }
}
