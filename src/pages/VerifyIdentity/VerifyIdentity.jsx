import { useState } from 'react'
import { sendIdentity } from '../../api/auth'
import Button from '../../components/Button/Button'
import IdentityFeedback from './IdentityFeedback'
import styles from './VerifyIdentity.module.css'

const VerifyIdentity = () => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    if (!selectedFile) return
    if (!selectedFile.type.startsWith('image/')) {
      setErrorMessage('Choisis une photo de pièce d’identité.')
      return
    }
    setFile(selectedFile)
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result)
    reader.readAsDataURL(selectedFile)
    setStatus('')
    setErrorMessage('')
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!file) {
      setErrorMessage('Ajoute une photo de ta pièce d’identité.')
      return
    }
    setIsLoading(true)
    setErrorMessage('')
    try {
      const formData = new FormData()
      formData.append('document', file)
      const result = await sendIdentity(formData)
      setStatus(
        result?.status === 'verified' || result?.verified
          ? 'verified'
          : 'pending',
      )
    } catch (error) {
      console.error(error)
      setErrorMessage('Envoi impossible. Réessaie dans un instant.')
    }
    setIsLoading(false)
  }
  return (
    <main>
      <h1>Verified Key</h1>
      <p className={styles.intro}>Rassure tes Roomies avec Verified Key.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="identity">
          Photo d’identité
        </label>
        <input
          id="identity"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {preview && (
          <img
            className={styles.preview}
            src={preview}
            alt="Aperçu de la pièce d’identité"
          />
        )}
        <IdentityFeedback status={status} errorMessage={errorMessage} />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Envoi…' : 'Envoyer pour vérification'}
        </Button>
      </form>
    </main>
  )
}

export default VerifyIdentity
