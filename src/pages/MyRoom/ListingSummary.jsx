import styles from './ListingSummary.module.css'

// Aperçu de mon annonce dans My Room
const ListingSummary = ({ listing }) => {
  return (
    <>
      <img className={styles.photo} src={listing.roomPhoto} alt="" />
      <p className={styles.name}>{listing.title}</p>
      <p>
        {listing.rent} € / mois + {listing.charges} € de charges
      </p>
      <p className={styles.neighborhood}>{listing.neighborhood}</p>
      {listing.sheSpace && <span className={styles.badge}>She Space</span>}
    </>
  )
}

export default ListingSummary
