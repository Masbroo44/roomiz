import styles from './Button.module.css'

// variant : "primary" ou "secondary"
const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
