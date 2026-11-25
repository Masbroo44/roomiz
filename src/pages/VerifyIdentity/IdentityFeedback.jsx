import styles from './VerifyIdentity.module.css'

const IdentityFeedback = ({ status, errorMessage }) => (
  <>
    {status && (
      <p className={status === 'verified' ? styles.verified : styles.pending}>
        {status === 'verified'
          ? 'Identité vérifiée'
          : 'Vérification en attente'}
      </p>
    )}
    {errorMessage && (
      <p className={styles.error} role="alert">
        {errorMessage}
      </p>
    )}
  </>
)

export default IdentityFeedback
