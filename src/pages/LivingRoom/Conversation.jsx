import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMessages, sendMessage } from '../../api/knocks'
import MessageForm from './MessageForm'
import styles from './Conversation.module.css'

const Conversation = () => {
  const { id } = useParams()
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await getMessages(id)
        setMessages(data)
        setErrorMessage('')
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger les messages.')
      }
      setIsLoading(false)
    }
    loadMessages()

    // Pas de temps réel : on recharge les messages toutes les 5 secondes
    const intervalId = setInterval(loadMessages, 5000)
    return () => clearInterval(intervalId)
  }, [id])

  const handleSend = async (text) => {
    const message = await sendMessage(id, text)
    setMessages((oldMessages) => [...oldMessages, message])
  }

  return (
    <main className={styles.conversation}>
      <Link className={styles.back} to="/living-room">
        ← Living Room
      </Link>

      <p className={styles.safety} role="note">
        🔒 Visite toujours le logement avant de payer quoi que ce soit. Ne
        partage jamais tes coordonnées bancaires ici.
      </p>

      {isLoading && <p className={styles.info}>Chargement…</p>}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {!isLoading && !errorMessage && messages.length === 0 && (
        <p className={styles.info}>Dis bonjour à ton futur Roomie 👋</p>
      )}

      <ul className={styles.list}>
        {messages.map((message) => (
          <li
            key={message.id}
            className={
              message.isMine ? `${styles.bubble} ${styles.mine}` : styles.bubble
            }
          >
            {message.text}
          </li>
        ))}
      </ul>

      <MessageForm label="Ton message" onSend={handleSend} />
    </main>
  )
}

export default Conversation
