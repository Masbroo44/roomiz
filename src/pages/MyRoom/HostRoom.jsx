import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyListing } from '../../api/preferences'
import Button from '../../components/Button/Button'
import ListingSummary from './ListingSummary'
import styles from './HostRoom.module.css'

// Bloc affiché aux hôtes : leur annonce, ou une invitation à la créer
const HostRoom = () => {
  const navigate = useNavigate()
  const [listing, setListing] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadListing = async () => {
      try {
        const data = await getMyListing() // null = pas encore d'annonce
        setListing(data)
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger ton annonce.')
      }
      setIsLoading(false)
    }
    loadListing()
  }, [])

  const isReady = !isLoading && !errorMessage

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Ma chambre à partager</h2>

      {isLoading && <p className={styles.info}>Chargement…</p>}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {isReady && listing && <ListingSummary listing={listing} />}

      {isReady && !listing && (
        <p className={styles.info}>
          Tu n&apos;as pas encore d&apos;annonce. Publie ta chambre pour que les
          Roomies viennent toquer.
        </p>
      )}

      {isReady && (
        <Button
          variant="secondary"
          onClick={() => navigate('/my-room/listing')}
        >
          {listing ? 'Modifier mon annonce' : 'Créer mon annonce'}
        </Button>
      )}
    </section>
  )
}

export default HostRoom
