import request from './client'

export const getKnocks = () => {
  return request('/knocks')
}

// Accepte un knock reçu : renvoie la conversation créée pour le Living Room
export const openDoor = (knockId) => {
  return request(`/knocks/${knockId}/open`, 'POST')
}

export const getConversations = () => {
  return request('/conversations')
}

export const getMessages = (conversationId) => {
  return request(`/conversations/${conversationId}/messages`)
}

export const sendMessage = (conversationId, text) => {
  return request(`/conversations/${conversationId}/messages`, 'POST', { text })
}
