import Chip from '../../components/Chip/Chip'
import { NEIGHBORHOODS } from './neighborhoods'
import styles from './NeighborhoodChips.module.css'

// selected : tableau des quartiers choisis
const NeighborhoodChips = ({ selected, onChange }) => {
  // Retire le quartier s'il est déjà choisi, sinon l'ajoute
  const handleToggle = (neighborhood) => {
    if (selected.includes(neighborhood)) {
      onChange(selected.filter((item) => item !== neighborhood))
    } else {
      onChange([...selected, neighborhood])
    }
  }

  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>Quartiers (optionnel)</legend>
      <div className={styles.chips}>
        {NEIGHBORHOODS.map((neighborhood) => (
          <Chip
            key={neighborhood}
            isSelected={selected.includes(neighborhood)}
            onClick={() => handleToggle(neighborhood)}
          >
            {neighborhood}
          </Chip>
        ))}
      </div>
    </fieldset>
  )
}

export default NeighborhoodChips
