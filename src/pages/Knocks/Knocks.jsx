import { useEffect, useState } from 'react'
import { getKnocks } from '../../api/knocks'
import KnockCard from './KnockCard'
import styles from './Knocks.module.css'

const Knocks = () => {
  const [knocks, setKnocks] = useState({ received: [], sent: [] })
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadKnocks = async () => {
      try {
        const data = await getKnocks()
        setKnocks(data)
      } catch (error) {
        console.error(error)
        setErrorMessage('Impossible de charger tes knocks. Réessaie plus tard.')
      }
      setIsLoading(false)
    }
    loadKnocks()
  }, [])

  return (
    <main>
      <h1>Knocks</h1>

      {isLoading && <p className={styles.info}>Chargement…</p>}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {!isLoading && !errorMessage && (
        <>
          <section className={styles.section}>
            <h2 className={styles.subtitle}>Ils ont toqué chez toi</h2>
            {knocks.received.length === 0 && (
              <p className={styles.info}>Personne n&apos;a encore toqué.</p>
            )}
            {knocks.received.map((knock) => (
              <KnockCard key={knock.id} knock={knock} isReceived />
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Tu as toqué</h2>
            {knocks.sent.length === 0 && (
              <p className={styles.info}>
                Tu n&apos;as encore toqué nulle part. Fais un tour dans Explore
                !
              </p>
            )}
            {knocks.sent.map((knock) => (
              <KnockCard key={knock.id} knock={knock} isReceived={false} />
            ))}
          </section>
        </>
      )}
    </main>
  )
}

export default Knocks
