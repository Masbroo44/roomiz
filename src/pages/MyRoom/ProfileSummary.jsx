import styles from './ProfileSummary.module.css'

// Résumé du profil créé sur l'écran "Créer mon profil"
const ProfileSummary = ({ profile }) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.name}>
        {profile.firstName}, {profile.age} ans
      </h2>
      <p className={styles.role}>
        {profile.role === 'host'
          ? "J'ai une chambre à partager"
          : 'Je cherche une chambre'}
      </p>
      <p>
        {profile.city} · budget de {profile.budget} € / mois
      </p>
      {profile.bio && <p>{profile.bio}</p>}
      {profile.interests && (
        <p className={styles.interests}>{profile.interests.join(' · ')}</p>
      )}
    </section>
  )
}

export default ProfileSummary
