import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConversations } from '../../api/knocks'
import styles from './LivingRoom.module.css'

const LivingRoom = () => {
  const [conversations, setConversations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadConversations = async () => {
      try {
        const data = await getConversations()
        // Les Knock Knock (anonymes) restent dans Knocks
        setConversations(data.filter((conversation) => !conversation.isMystery))
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger tes discussions.')
      }
      setIsLoading(false)
    }
    loadConversations()
  }, [])

  return (
    <main>
      <h1>Living Room</h1>

      {isLoading && <p className={styles.info}>Chargement…</p>}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {!isLoading && !errorMessage && conversations.length === 0 && (
        <p className={styles.info}>
          Pas encore de discussion. Ouvre une porte dans Knocks pour commencer.
        </p>
      )}

      <ul className={styles.list}>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <Link
              className={styles.item}
              to={`/living-room/${conversation.id}`}
            >
              <span className={styles.name}>{conversation.name}</span>
              <span className={styles.preview}>
                {conversation.lastMessage || 'Porte ouverte ! Dis bonjour.'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default LivingRoom
