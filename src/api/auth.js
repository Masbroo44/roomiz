import request from './client'

export const register = (email, password) => {
  return request('/auth/register', 'POST', { email, password })
}

export const login = (email, password) => {
  return request('/auth/login', 'POST', { email, password })
}

export const sendIdentity = async (formData) => {
  const headers = {}
  const token = localStorage.getItem('token')
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/identity`, {
    method: 'POST',
    headers,
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Erreur API ${response.status}`)
  }
  if (response.status === 204) {
    return null
  }
  return response.json()
}
