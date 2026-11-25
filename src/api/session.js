import { accounts } from '../data/accounts'

// À la connexion, le token rangé dans le localStorage contient l'id du compte
// (ex : "faux-token-2"). On s'en sert pour retrouver le compte connecté.
export const makeToken = (account) => {
  return `faux-token-${account.id}`
}

// Compte vide utilisé tant que personne n'est connecté. Le profil créé avant
// l'inscription y attend d'être rangé dans le nouveau compte.
export const visitor = {
  id: 0,
  profile: null,
  preferences: null,
  listing: null,
}

// Renvoie le compte connecté, ou le compte visiteur si personne ne l'est
export const getCurrentAccount = () => {
  const token = localStorage.getItem('token')
  const account = accounts.find((item) => makeToken(item) === token)
  return account || visitor
}
