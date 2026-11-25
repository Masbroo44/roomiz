import { useState } from 'react'
import { updatePreferences } from '../../api/preferences'
import Button from '../../components/Button/Button'
import PreferencesFields from './PreferencesFields'
import { validatePreferences } from './preferencesForm'
import styles from './Preferences.module.css'

// Le formulaire, rempli au départ avec les critères déjà enregistrés
const PreferencesEditor = ({ initialForm }) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // Met à jour un seul champ, ex : handleChange('sheSpace', true)
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    const newErrors = validatePreferences(form)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSaving(true)
    try {
      // Le champ contient du texte : on convertit le budget en nombre
      await updatePreferences({ ...form, maxBudget: Number(form.maxBudget) })
      setSuccessMessage('Critères enregistrés !')
    } catch (error) {
      console.error(error)
      setErrorMessage('Enregistrement impossible. Réessaie dans un instant.')
    }
    setIsSaving(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <PreferencesFields form={form} errors={errors} onChange={handleChange} />

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p className={styles.success} role="status">
          {successMessage}
        </p>
      )}

      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'Enregistrement…' : 'Enregistrer'}
      </Button>
    </form>
  )
}

export default PreferencesEditor
