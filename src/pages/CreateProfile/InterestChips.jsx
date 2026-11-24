import Chip from '../../components/Chip/Chip'
import styles from './InterestChips.module.css'

const INTERESTS = [
  'Cuisine',
  'Sport',
  'Musique',
  'Cinéma',
  'Jeux vidéo',
  'Voyages',
  'Lecture',
  'Soirées',
  'Animaux',
  'Jardinage',
]

// selected : tableau des centres d'intérêt choisis
const InterestChips = ({ selected, onChange, error = '' }) => {
  // Retire l'intérêt s'il est déjà choisi, sinon l'ajoute
  const handleToggle = (interest) => {
    if (selected.includes(interest)) {
      onChange(selected.filter((item) => item !== interest))
    } else {
      onChange([...selected, interest])
    }
  }

  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>Centres d&apos;intérêt</legend>
      <div className={styles.chips}>
        {INTERESTS.map((interest) => (
          <Chip
            key={interest}
            isSelected={selected.includes(interest)}
            onClick={() => handleToggle(interest)}
          >
            {interest}
          </Chip>
        ))}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </fieldset>
  )
}

export default InterestChips
