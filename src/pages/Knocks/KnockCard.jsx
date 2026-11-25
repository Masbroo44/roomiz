import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { openDoor } from '../../api/knocks'
import Button from '../../components/Button/Button'
import styles from './KnockCard.module.css'

// Un knock de la liste. isReceived : true si quelqu'un a toqué chez moi.
const KnockCard = ({ knock, isReceived }) => {
  const navigate = useNavigate()
  const [isOpening, setIsOpening] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleOpen = async () => {
    setIsOpening(true)
    setErrorMessage('')
    try {
      const conversation = await openDoor(knock.id)
      // L'écran Porte ouverte ! reçoit la conversation, sans rappeler l'API
      navigate('/open-door', { state: conversation })
    } catch (error) {
      console.error(error)
      setErrorMessage("La porte n'a pas pu s'ouvrir. Réessaie.")
      setIsOpening(false)
    }
  }

  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{knock.name}</h3>
      <p className={styles.listing}>{knock.listingTitle}</p>

      {knock.isOpen && (
        <>
          <p className={styles.badge}>Porte ouverte !</p>
          <Button
            variant="secondary"
            onClick={() => navigate(`/living-room/${knock.conversationId}`)}
          >
            Écrire dans le Living Room
          </Button>
        </>
      )}

      {!knock.isOpen && knock.isMystery && (
        <Button
          variant="secondary"
          onClick={() => navigate(`/knock-knock/${knock.conversationId}`)}
        >
          Jouer au Knock Knock
        </Button>
      )}

      {!knock.isOpen && !knock.isMystery && isReceived && (
        <Button disabled={isOpening} onClick={handleOpen}>
          {isOpening ? 'Ouverture…' : 'Ouvrir la porte'}
        </Button>
      )}

      {!knock.isOpen && !knock.isMystery && !isReceived && (
        <p className={styles.waiting}>En attente de réponse</p>
      )}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}
    </article>
  )
}

export default KnockCard
