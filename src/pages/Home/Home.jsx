import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import styles from './Home.module.css'

const ROLES = [
  { value: 'seeker', icon: '🔑', label: 'Je cherche une chambre' },
  { value: 'host', icon: '🏠', label: "J'ai une chambre à partager" },
]

const Home = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState('')

  // Le choix est passé à l'écran suivant dans l'adresse (?role=...)
  const handleStart = () => {
    navigate(`/create-profile?role=${role}`)
  }

  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <div className={styles.logoMark} aria-hidden="true">
          <span className={styles.door} />
        </div>
        <h1 className={styles.logo}>Roomiz</h1>
        <p className={styles.tagline}>
          Swipe des logements, pas des personnes. Toque à la porte de ta future
          coloc.
        </p>
      </header>

      <section className={styles.choices}>
        <h2 className={styles.question}>Quelle est ta situation ?</h2>
        {ROLES.map((item) => (
          <button
            key={item.value}
            className={
              role === item.value
                ? `${styles.choice} ${styles.selected}`
                : styles.choice
            }
            type="button"
            aria-pressed={role === item.value}
            onClick={() => setRole(item.value)}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </section>

      <Button disabled={role === ''} onClick={handleStart}>
        Créer mon profil
      </Button>
    </main>
  )
}

export default Home
