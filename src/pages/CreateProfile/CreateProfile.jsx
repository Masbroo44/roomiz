import { useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { createProfile } from '../../api/profile'
import Button from '../../components/Button/Button'
import ProfileFields from './ProfileFields'
import { EMPTY_FORM, validateProfile } from './profileForm'
import styles from './CreateProfile.module.css'

const CreateProfile = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') // "seeker" ou "host", choisi sur l'accueil

  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Met à jour un seul champ, ex : handleChange('city', 'Lyon')
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newErrors = validateProfile(form)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsLoading(true)
    setErrorMessage('')
    try {
      // Les champs contiennent du texte : on convertit âge et budget en nombres
      const age = Number(form.age)
      const budget = Number(form.budget)
      await createProfile({ ...form, role, age, budget })
      navigate('/explore')
    } catch (error) {
      console.error(error)
      setErrorMessage('Envoi impossible. Réessaie dans un instant.')
      setIsLoading(false)
    }
  }

  // Sans choix fait sur l'accueil, on y retourne
  if (!role) {
    return <Navigate to="/" replace />
  }

  return (
    <main>
      <h1>Crée ton profil</h1>
      <p className={styles.intro}>Présente-toi à tes futurs Roomies.</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <ProfileFields form={form} errors={errors} onChange={handleChange} />

        {errorMessage && (
          <p className={styles.error} role="alert">
            {errorMessage}
          </p>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Création en cours…' : 'Créer mon profil'}
        </Button>
      </form>
    </main>
  )
}

export default CreateProfile
