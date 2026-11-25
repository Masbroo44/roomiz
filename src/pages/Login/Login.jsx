import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextValue'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import styles from './Login.module.css'

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
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
    if (!password) newErrors.password = 'Saisis ton mot de passe.'
    setErrors(newErrors)
    if (Object.keys(newErrors).length) return

    setIsLoading(true)
    setErrorMessage('')
    try {
      await login(email, password)
      navigate(location.state?.from?.pathname || '/explore', { replace: true })
    } catch (error) {
      console.error(error)
      setErrorMessage('Connexion impossible. Vérifie tes identifiants.')
      setIsLoading(false)
    }
  }

  return (
    <main>
      <h1>Connexion</h1>
      <p className={styles.intro}>Retrouve tes Roomies.</p>
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
          {isLoading ? 'Connexion…' : 'Se connecter'}
        </Button>
      </form>
      <p className={styles.link}>
        Pas encore de compte ? <Link to="/register">Inscris-toi</Link>
      </p>
    </main>
  )
}

export default Login
