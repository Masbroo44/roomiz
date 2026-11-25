import { getCurrentAccount } from './session'
import wait from './wait'

// Sans connexion, le profil va dans le compte visiteur jusqu'à l'inscription
export const createProfile = async (profile) => {
  await wait()
  const account = getCurrentAccount()
  account.profile = profile
  return profile
}
