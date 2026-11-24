import { useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import styles from './MessageForm.module.css'

// Champ + bouton Envoyer. onSend(text) envoie le message à l'API.
// Aussi utilisé par Knock Knock pour répondre aux questions.
const MessageForm = ({ label, onSend }) => {
  const [text, setText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (text.trim() === '') {
      return
    }

    setIsSending(true)
    setErrorMessage('')
    try {
      await onSend(text.trim())
      setText('')
    } catch (error) {
      console.error(error)
      setErrorMessage('Envoi impossible. Réessaie dans un instant.')
    }
    setIsSending(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label={label}
        id="message"
        value={text}
        onChange={setText}
        error={errorMessage}
      />
      <Button type="submit" disabled={isSending}>
        {isSending ? 'Envoi…' : 'Envoyer'}
      </Button>
    </form>
  )
}

export default MessageForm
