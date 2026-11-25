import { useEffect, useState } from 'react'
import { getMyListing } from '../../api/preferences'
import ListingEditor from './ListingEditor'
import { EMPTY_LISTING, listingToForm } from './listingForm'
import styles from './MyListing.module.css'

// La page charge mon annonce si elle existe, puis affiche le formulaire
const MyListing = () => {
  const [initialForm, setInitialForm] = useState(EMPTY_LISTING)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadListing = async () => {
      try {
        const data = await getMyListing()
        // null = pas encore d'annonce : le formulaire reste vide
        if (data) {
          setInitialForm(listingToForm(data))
        }
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger ton annonce.')
      }
      setIsLoading(false)
    }
    loadListing()
  }, [])

  return (
    <main>
      <h1>Mon annonce</h1>
      <p className={styles.intro}>
        Présente ta chambre aux Roomies qui cherchent une coloc.
      </p>

      {isLoading && <p className={styles.info}>Chargement…</p>}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {/* Pas de formulaire après une erreur : il écraserait mon annonce */}
      {!isLoading && !errorMessage && (
        <ListingEditor initialForm={initialForm} />
      )}
    </main>
  )
}

export default MyListing
