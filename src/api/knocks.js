import { conversations } from '../data/conversations'
import { knocks } from '../data/knocks'
import { messages } from '../data/messages'
import { getCurrentAccount } from './session'
import wait from './wait'

export const getKnocks = async () => {
  await wait()
  const account = getCurrentAccount()
  const myKnocks = knocks.filter((knock) => knock.accountId === account.id)
  return {
    received: myKnocks.filter((knock) => knock.isReceived),
    sent: myKnocks.filter((knock) => !knock.isReceived),
  }
}

// Ouvre la porte : crée la conversation du Living Room et la renvoie
export const openDoor = async (knockId) => {
  await wait()
  const account = getCurrentAccount()
  const knock = knocks.find(
    (item) => item.id === knockId && item.accountId === account.id,
  )
  if (!knock) {
    throw new Error('Knock introuvable')
  }

  // Fin d'un Knock Knock : le pseudonyme laisse la place au vrai prénom
  if (knock.realName) {
    knock.name = knock.realName
  }

  const conversation = {
    id: Date.now(),
    accountId: account.id,
    knockId: knock.id,
    name: knock.name,
    isMystery: false,
    photo: '',
    lastMessage: '',
  }
  conversations.push(conversation)
  knock.isOpen = true
  knock.conversationId = conversation.id
  return conversation
}

export const getConversations = async () => {
  await wait()
  const account = getCurrentAccount()
  return conversations.filter((item) => item.accountId === account.id)
}

// L'id vient de l'adresse de la page (du texte) : on compare en texte
export const getMessages = async (conversationId) => {
  await wait()
  return messages.filter(
    (message) => String(message.conversationId) === String(conversationId),
  )
}

export const sendMessage = async (conversationId, text) => {
  await wait()
  const conversation = conversations.find(
    (item) => String(item.id) === String(conversationId),
  )
  if (!conversation) {
    throw new Error('Conversation introuvable')
  }

  const message = {
    id: Date.now(),
    conversationId: conversation.id,
    text,
    isMine: true,
  }
  messages.push(message)
  conversation.lastMessage = text // aperçu affiché dans le Living Room
  return message
}
