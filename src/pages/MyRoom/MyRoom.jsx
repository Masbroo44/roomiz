import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyProfile } from '../../api/preferences'
import HostRoom from './HostRoom'
import ProfileSummary from './ProfileSummary'
import styles from './MyRoom.module.css'

const MyRoom = () => {
  const [profile, setProfile] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getMyProfile()
        setProfile(data)
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger ton profil. Réessaie plus tard.')
      }
      setIsLoading(false)
    }
    loadProfile()
  }, [])

  return (
    <main className={styles.page}>
      <h1>My Room</h1>

      {isLoading && <p className={styles.info}>Chargement…</p>}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {profile && (
        <>
          <ProfileSummary profile={profile} />

          {profile.role === 'seeker' && (
            <p className={styles.info}>
              Tu cherches une chambre : règle tes critères, puis va toquer dans
              Explore.
            </p>
          )}
          <Link className={styles.link} to="/preferences">
            Mes critères
          </Link>

          {profile.role === 'host' && <HostRoom />}
        </>
      )}
    </main>
  )
}

export default MyRoom
