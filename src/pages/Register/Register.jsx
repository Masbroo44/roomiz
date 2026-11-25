import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../api/auth'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import styles from './Register.module.css'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newErrors = {}
    if (!email.trim()) newErrors.email = 'Saisis ton adresse e-mail.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Saisis une adresse e-mail valide.'
    if (password.length < 8) newErrors.password = '8 caractères minimum.'
    setErrors(newErrors)
    if (Object.keys(newErrors).length) return

    setIsLoading(true)
    setErrorMessage('')
    try {
      await register(email, password)
      navigate('/login', { replace: true })
    } catch (error) {
      console.error(error)
      setErrorMessage('Inscription impossible. Réessaie dans un instant.')
      setIsLoading(false)
    }
  }

  return (
    <main>
      <h1>Inscription</h1>
      <p className={styles.intro}>Crée ton compte Roomiz.</p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <Input
          label="E-mail"
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
        />
        <Input
          label="Mot de passe"
          id="password"
          type="password"
          value={password}
          onChange={setPassword}
          error={errors.password}
        />
        {errorMessage && (
          <p className={styles.error} role="alert">
            {errorMessage}
          </p>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Inscription…' : 'Créer mon compte'}
        </Button>
      </form>
      <p className={styles.link}>
        Déjà Roomie ? <Link to="/login">Connecte-toi</Link>
      </p>
    </main>
  )
}

export default Register
