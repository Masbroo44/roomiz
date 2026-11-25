import Chip from '../../components/Chip/Chip'
import { NEIGHBORHOODS } from '../Preferences/neighborhoods'
import styles from '../Preferences/NeighborhoodChips.module.css'

// value : le quartier choisi (un seul, contrairement à Mes critères)
const NeighborhoodChoice = ({ value, onChange, error = '' }) => {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>Quartier</legend>
      <div className={styles.chips}>
        {NEIGHBORHOODS.map((neighborhood) => (
          <Chip
            key={neighborhood}
            isSelected={value === neighborhood}
            onClick={() => onChange(neighborhood)}
          >
            {neighborhood}
          </Chip>
        ))}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </fieldset>
  )
}

export default NeighborhoodChoice
