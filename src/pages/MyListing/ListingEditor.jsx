import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateMyListing } from '../../api/preferences'
import Button from '../../components/Button/Button'
import ListingFields from './ListingFields'
import { validateListing } from './listingForm'
import styles from './MyListing.module.css'

// Le formulaire, rempli au départ avec l'annonce déjà enregistrée
const ListingEditor = ({ initialForm }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Met à jour un seul champ, ex : handleChange('title', 'Chambre au calme')
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newErrors = validateListing(form)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSaving(true)
    setErrorMessage('')
    try {
      // Les champs contiennent du texte : on convertit loyer et charges en nombres
      const rent = Number(form.rent)
      const charges = Number(form.charges)
      await updateMyListing({ ...form, rent, charges })
      navigate('/my-room')
    } catch (error) {
      console.error(error)
      setErrorMessage('Enregistrement impossible. Réessaie dans un instant.')
      setIsSaving(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <ListingFields form={form} errors={errors} onChange={handleChange} />

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'Enregistrement…' : 'Enregistrer mon annonce'}
      </Button>
    </form>
  )
}

export default ListingEditor
