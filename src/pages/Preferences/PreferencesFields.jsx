import Input from '../../components/Input/Input'
import Toggle from '../../components/Toggle/Toggle'
import NeighborhoodChips from './NeighborhoodChips'
import styles from './Preferences.module.css'

// Les champs du formulaire. onChange(field, value) met à jour un champ.
const PreferencesFields = ({ form, errors, onChange }) => {
  return (
    <>
      <Input
        label="Budget max (€ / mois)"
        id="maxBudget"
        inputMode="numeric"
        value={form.maxBudget}
        onChange={(value) => onChange('maxBudget', value)}
        error={errors.maxBudget}
      />
      <NeighborhoodChips
        selected={form.neighborhoods}
        onChange={(value) => onChange('neighborhoods', value)}
      />
      <Input
        label="Date d'emménagement (optionnel)"
        id="moveInDate"
        type="date"
        value={form.moveInDate}
        onChange={(value) => onChange('moveInDate', value)}
      />
      <div>
        <Toggle
          label="She Space"
          id="sheSpace"
          checked={form.sheSpace}
          onChange={(value) => onChange('sheSpace', value)}
        />
        <p className={styles.hint}>
          Avec She Space, tu ne vois que les colocations 100 % femmes.
        </p>
      </div>
    </>
  )
}

export default PreferencesFields
