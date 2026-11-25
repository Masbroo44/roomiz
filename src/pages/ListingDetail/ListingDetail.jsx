import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getListing, knock } from '../../api/listings'
import Button from '../../components/Button/Button'
import styles from './ListingDetail.module.css'

const ListingDetail = () => {
  const { id } = useParams()
  const [listing, setListing] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [hasKnocked, setHasKnocked] = useState(false)

  useEffect(() => {
    getListing(id)
      .then(setListing)
      .catch(() => setErrorMessage('Impossible de charger l’annonce.'))
      .finally(() => setIsLoading(false))
  }, [id])

  const handleKnock = async () => {
    try {
      await knock(id)
      setHasKnocked(true)
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) {
    return <main>Chargement…</main>
  }

  if (errorMessage || !listing) {
    return (
      <main>
        <p className={styles.error} role="alert">
          {errorMessage || 'Cette annonce est introuvable.'}
        </p>
      </main>
    )
  }

  return (
    <main className={styles.detail}>
      <div className={styles.photos}>
        {listing.photos?.map((photo) => (
          <img key={photo} className={styles.photo} src={photo} alt="" />
        ))}
      </div>

      <div className={styles.badges}>
        {listing.verifiedKey && (
          <span className={styles.badge}>🔑 Verified Key</span>
        )}
        {listing.sheSpace && <span className={styles.badge}>She Space</span>}
      </div>

      <p className={styles.rent}>
        {listing.rent} € / mois + {listing.charges} € de charges
      </p>
      <p>{listing.description}</p>

      <div className={styles.roommates}>
        <p className={styles.roommatesTitle}>Colocataires</p>
        {listing.roommates?.map((roommate) => (
          <p key={roommate.firstName}>
            {roommate.firstName}, {roommate.age} ans
          </p>
        ))}
      </div>

      <Button onClick={handleKnock} disabled={hasKnocked}>
        {hasKnocked ? 'Toqué !' : 'Toquer'}
      </Button>
    </main>
  )
}

export default ListingDetail
