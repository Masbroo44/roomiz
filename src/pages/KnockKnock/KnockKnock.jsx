import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getConversations, getMessages, sendMessage } from '../../api/knocks'
import Chat from './Chat'
import styles from './KnockKnock.module.css'

const KnockKnock = () => {
  const { id } = useParams()
  const [conversation, setConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadChat = async () => {
      try {
        // Pseudonyme, photo et id du knock sont rangés dans la conversation
        const conversations = await getConversations()
        setConversation(conversations.find((item) => String(item.id) === id))
        setMessages(await getMessages(id))
        setErrorMessage('')
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger le Knock Knock.')
      }
      setIsLoading(false)
    }
    loadChat()

    // Pas de temps réel : on recharge toutes les 5 secondes
    const intervalId = setInterval(loadChat, 5000)
    return () => clearInterval(intervalId)
  }, [id])

  const handleSend = async (text) => {
    const message = await sendMessage(id, text)
    setMessages((oldMessages) => [...oldMessages, message])
  }

  return (
    <main className={styles.knockKnock}>
      <Link className={styles.back} to="/knocks">
        ← Knocks
      </Link>
      <h1>Knock Knock</h1>

      {isLoading && <p className={styles.info}>Chargement…</p>}
      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}
      {!isLoading && !errorMessage && !conversation && (
        <p className={styles.info}>Ce Knock Knock est introuvable.</p>
      )}

      {conversation && (
        <Chat
          conversation={conversation}
          messages={messages}
          onSend={handleSend}
        />
      )}
    </main>
  )
}

export default KnockKnock
