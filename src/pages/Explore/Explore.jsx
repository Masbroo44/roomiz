import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getListings, knock } from '../../api/listings'
import ListingCard from './ListingCard'
import styles from './Explore.module.css'

const Explore = () => {
  const navigate = useNavigate()
  const [listings, setListings] = useState([])
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getListings()
      .then(setListings)
      .catch(() => setErrorMessage('Impossible de charger les logements.'))
      .finally(() => setIsLoading(false))
  }, [])

  const goToNext = () => setIndex((current) => current + 1)

  // Le knock part en même temps que le passage au logement suivant
  const handleKnock = async (listingId) => {
    goToNext()
    try {
      await knock(listingId)
    } catch (error) {
      console.error(error)
    }
  }

  const listing = listings[index]

  return (
    <main className={styles.explore}>
      <h1>Explore</h1>

      {isLoading && <p>Chargement…</p>}
      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}
      {!isLoading && !errorMessage && !listing && (
        <p className={styles.empty}>Plus aucun logement pour l’instant.</p>
      )}

      {listing && (
        <ListingCard
          key={listing.id}
          listing={listing}
          onPass={goToNext}
          onKnock={() => handleKnock(listing.id)}
          onOpen={() => navigate(`/listings/${listing.id}`)}
        />
      )}
    </main>
  )
}

export default Explore
