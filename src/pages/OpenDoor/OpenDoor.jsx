import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import styles from './OpenDoor.module.css'

// Écran de match. Il reçoit la conversation créée par Knocks ou Knock Knock
// (dans le state de la navigation) et n'appelle pas l'API.
const OpenDoor = () => {
  const navigate = useNavigate()
  const { state: conversation } = useLocation()

  // Arrivée directe par l'adresse, sans match : retour aux Knocks
  if (!conversation) {
    return <Navigate to="/knocks" replace />
  }

  return (
    <main className={styles.openDoor}>
      <div className={styles.circle} aria-hidden="true">
        🎉
      </div>
      <h1 className={styles.title}>Porte ouverte !</h1>
      <p className={styles.text}>
        Toi et {conversation.name} avez envie de vivre ensemble. Faites
        connaissance dans le Living Room.
      </p>

      <div className={styles.actions}>
        <Button onClick={() => navigate(`/living-room/${conversation.id}`)}>
          Écrire dans le Living Room
        </Button>
        <Button variant="secondary" onClick={() => navigate('/knocks')}>
          Retour aux Knocks
        </Button>
      </div>
    </main>
  )
}

export default OpenDoor
