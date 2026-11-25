import request from './client'

// Fait un GET et renvoie null si la ressource n'existe pas encore (erreur 404)
const getOrNull = async (path) => {
  try {
    return await request(path)
  } catch (error) {
    if (error.message === 'Erreur API 404') {
      return null
    }
    throw error
  }
}

export const getPreferences = () => {
  return getOrNull('/preferences')
}

export const updatePreferences = (preferences) => {
  return request('/preferences', 'PUT', preferences)
}

export const getMyListing = () => {
  return getOrNull('/me/listing')
}

export const updateMyListing = (listing) => {
  return request('/me/listing', 'PUT', listing)
}

// Mon profil (celui de l'écran "Créer mon profil"), affiché dans My Room
export const getMyProfile = () => {
  return request('/me/profile')
}
