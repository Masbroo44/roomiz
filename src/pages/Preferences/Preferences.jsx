import { useEffect, useState } from 'react'
import { getPreferences } from '../../api/preferences'
import PreferencesEditor from './PreferencesEditor'
import { EMPTY_PREFERENCES, preferencesToForm } from './preferencesForm'
import styles from './Preferences.module.css'

// La page charge les critères enregistrés, puis affiche le formulaire
const Preferences = () => {
  const [initialForm, setInitialForm] = useState(EMPTY_PREFERENCES)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const data = await getPreferences()
        // null = aucun critère enregistré : le formulaire reste vide
        if (data) {
          setInitialForm(preferencesToForm(data))
        }
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger tes critères.')
      }
      setIsLoading(false)
    }
    loadPreferences()
  }, [])

  return (
    <main>
      <h1>Mes critères</h1>
      <p className={styles.intro}>
        Explore te montre les logements qui te correspondent.
      </p>

      {isLoading && <p className={styles.info}>Chargement…</p>}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {/* Pas de formulaire après une erreur : il écraserait mes critères */}
      {!isLoading && !errorMessage && (
        <PreferencesEditor initialForm={initialForm} />
      )}
    </main>
  )
}

export default Preferences
