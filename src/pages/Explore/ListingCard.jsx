import { useState } from 'react'
import Button from '../../components/Button/Button'
import styles from './ListingCard.module.css'

const SWIPE_THRESHOLD = 100

// Carte swipable : suit le doigt, part sur le côté si le geste est assez grand.
// Un tap (pas de déplacement) ouvre la fiche annonce. Le swipe ne toque jamais.
const ListingCard = ({ listing, onPass, onKnock, onOpen }) => {
  const [startX, setStartX] = useState(null)
  const [dragX, setDragX] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)

  // La capture garde les événements sur la carte même si elle sort de sous le doigt
  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    setStartX(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (startX === null) return
    setDragX(event.clientX - startX)
  }

  const handlePointerUp = () => {
    if (startX === null) return

    if (Math.abs(dragX) > SWIPE_THRESHOLD) {
      setIsLeaving(true)
      setTimeout(onPass, 200)
    } else if (Math.abs(dragX) < 5) {
      onOpen()
    } else {
      setDragX(0)
    }
    setStartX(null)
  }

  const translateX = isLeaving ? dragX * 3 : dragX
  const cardStyle = {
    transform: `translateX(${translateX}px) rotate(${translateX / 20}deg)`,
    transition: startX === null ? 'transform 0.2s ease-out' : 'none',
    opacity: isLeaving ? 0 : 1,
  }

  return (
    <div className={styles.cardWrapper}>
      <div
        className={styles.card}
        style={cardStyle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img className={styles.photo} src={listing.roomPhoto} alt="" />

        <div className={styles.info}>
          <p className={styles.rent}>{listing.rent} € / mois</p>
          <p className={styles.neighborhood}>{listing.neighborhood}</p>
          <p className={styles.vibeCheck}>Vibe Check : {listing.vibeCheck}</p>

          <div className={styles.roommates}>
            <p className={styles.roommatesTitle}>Qui vit là</p>
            {listing.roommates?.map((roommate) => (
              <p key={roommate.firstName}>
                {roommate.firstName}, {roommate.age} ans
              </p>
            ))}
          </div>
        </div>
      </div>

      <Button onClick={onKnock}>Toquer</Button>
    </div>
  )
}

export default ListingCard
