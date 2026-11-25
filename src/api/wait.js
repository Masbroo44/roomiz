// Petit délai avant chaque réponse, comme un vrai appel réseau :
// les états de chargement des pages restent visibles.
const DELAY = 400 // en millisecondes

const wait = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, DELAY)
  })
}

export default wait
