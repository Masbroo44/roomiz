import styles from './Input.module.css'

// onChange reçoit directement la nouvelle valeur (pas l'événement)
const Input = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error = '',
  placeholder = '',
  inputMode,
  multiline = false,
}) => {
  const errorId = `${id}-error`

  // Props communes au champ, qu'il soit un <input> ou un <textarea>
  const fieldProps = {
    id,
    value,
    placeholder,
    inputMode, // ex : "numeric" affiche le clavier de chiffres sur mobile
    className: error ? `${styles.input} ${styles.invalid}` : styles.input,
    onChange: (event) => onChange(event.target.value),
    'aria-invalid': error !== '',
    'aria-describedby': error ? errorId : undefined,
  }

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={3} {...fieldProps} />
      ) : (
        <input type={type} {...fieldProps} />
      )}
      {error && (
        <p className={styles.error} id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
