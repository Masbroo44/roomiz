import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { openDoor } from '../../api/knocks'
import Button from '../../components/Button/Button'
import MessageForm from '../LivingRoom/MessageForm'
import styles from './NextStep.module.css'

// Bas de l'écran : répondre, attendre l'autre, ou ouvrir la porte à la fin
const NextStep = ({ conversation, isFinished, isWaiting, onSend }) => {
  const navigate = useNavigate()
  const [isOpening, setIsOpening] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleOpen = async () => {
    setIsOpening(true)
    setErrorMessage('')
    try {
      const newConversation = await openDoor(conversation.knockId)
      navigate('/open-door', { state: newConversation })
    } catch (error) {
      console.error(error)
      setErrorMessage("La porte n'a pas pu s'ouvrir. Réessaie.")
      setIsOpening(false)
    }
  }

  if (isFinished) {
    return (
      <div className={styles.end}>
        <p>Toutes les questions sont passées. Envie de vivre ensemble ?</p>
        <Button disabled={isOpening} onClick={handleOpen}>
          {isOpening ? 'Ouverture…' : 'Ouvrir la porte'}
        </Button>
        {errorMessage && (
          <p className={styles.error} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }

  if (isWaiting) {
    return (
      <p className={styles.waiting}>
        En attente de la réponse de {conversation.name}…
      </p>
    )
  }

  return <MessageForm label="Ta réponse" onSend={onSend} />
}

export default NextStep
