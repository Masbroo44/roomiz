import { knocks } from '../data/knocks'
import { listings } from '../data/listings'
import { getCurrentAccount } from './session'
import wait from './wait'

// L'id vient parfois de l'adresse de la page (du texte) : on compare en texte
const findListing = (id) => {
  const listing = listings.find((item) => String(item.id) === String(id))
  if (!listing) {
    throw new Error('Annonce introuvable')
  }
  return listing
}

export const getListings = async () => {
  await wait()
  return listings
}

export const getListing = async (id) => {
  await wait()
  return findListing(id)
}

// Toquer : ajoute un knock dans la liste "Tu as toqué" du compte connecté
export const knock = async (listingId) => {
  await wait()
  const account = getCurrentAccount()
  const listing = findListing(listingId)

  // Déjà toqué à ce logement : on ne crée pas un deuxième knock
  const oldKnock = knocks.find(
    (item) => item.accountId === account.id && item.listingId === listing.id,
  )
  if (oldKnock) {
    return oldKnock
  }

  const newKnock = {
    id: Date.now(),
    accountId: account.id,
    isReceived: false,
    listingId: listing.id,
    name: listing.roommates[0].firstName,
    listingTitle: listing.title,
    isMystery: false,
    isOpen: false,
    conversationId: null,
  }
  knocks.push(newKnock)
  return newKnock
}
