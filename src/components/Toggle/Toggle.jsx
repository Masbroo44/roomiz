import styles from './Toggle.module.css'

// onChange reçoit directement true ou false
const Toggle = ({ label, id, checked, onChange }) => {
  return (
    <label className={styles.toggle} htmlFor={id}>
      {label}
      <input
        className={styles.switch}
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  )
}

export default Toggle
