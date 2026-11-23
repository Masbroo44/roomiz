const API_URL = import.meta.env.VITE_API_URL

// Petite fonction fetch utilisée par tous les fichiers de src/api
const request = async (path, method = 'GET', body) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  }

  // Le token sera rangé dans le localStorage à la connexion (futur AuthContext)
  const token = localStorage.getItem('token')
  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(API_URL + path, options)

  if (!response.ok) {
    throw new Error(`Erreur API ${response.status}`)
  }

  // 204 = succès sans contenu, il n'y a pas de JSON à lire
  if (response.status === 204) {
    return null
  }

  return response.json()
}

export default request
