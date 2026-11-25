import Input from '../../components/Input/Input'
import Toggle from '../../components/Toggle/Toggle'
import NeighborhoodChoice from './NeighborhoodChoice'
import styles from './MyListing.module.css'

// Les champs du formulaire. onChange(field, value) met à jour un champ.
const ListingFields = ({ form, errors, onChange }) => {
  return (
    <>
      <Input
        label="Titre de l'annonce"
        id="title"
        value={form.title}
        onChange={(value) => onChange('title', value)}
        error={errors.title}
      />
      <Input
        label="Loyer (€ / mois)"
        id="rent"
        inputMode="numeric"
        value={form.rent}
        onChange={(value) => onChange('rent', value)}
        error={errors.rent}
      />
      <Input
        label="Charges (€ / mois)"
        id="charges"
        inputMode="numeric"
        value={form.charges}
        onChange={(value) => onChange('charges', value)}
        error={errors.charges}
      />
      <NeighborhoodChoice
        value={form.neighborhood}
        onChange={(value) => onChange('neighborhood', value)}
        error={errors.neighborhood}
      />
      <Input
        label="Description"
        id="description"
        multiline
        value={form.description}
        onChange={(value) => onChange('description', value)}
        error={errors.description}
      />
      <Input
        label="Lien d'une photo de la chambre"
        id="roomPhoto"
        type="url"
        placeholder="https://"
        value={form.roomPhoto}
        onChange={(value) => onChange('roomPhoto', value)}
        error={errors.roomPhoto}
      />
      <div>
        <Toggle
          label="She Space"
          id="sheSpace"
          checked={form.sheSpace}
          onChange={(value) => onChange('sheSpace', value)}
        />
        <p className={styles.hint}>
          Active She Space si ta colocation est 100 % femmes.
        </p>
      </div>
    </>
  )
}

export default ListingFields
