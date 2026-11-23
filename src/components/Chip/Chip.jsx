import styles from './Chip.module.css'

const Chip = ({ children, isSelected = false, onClick }) => {
  return (
    <button
      className={isSelected ? `${styles.chip} ${styles.selected}` : styles.chip}
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Chip
