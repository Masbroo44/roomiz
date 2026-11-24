import Input from '../../components/Input/Input'
import InterestChips from './InterestChips'

// Les champs du formulaire. onChange(field, value) met à jour un champ.
// Âge et budget restent des champs texte : avec type="number", la molette
// de la souris modifie la valeur sans prévenir.
const ProfileFields = ({ form, errors, onChange }) => {
  return (
    <>
      <Input
        label="Prénom"
        id="firstName"
        value={form.firstName}
        onChange={(value) => onChange('firstName', value)}
        error={errors.firstName}
      />
      <Input
        label="Âge"
        id="age"
        inputMode="numeric"
        value={form.age}
        onChange={(value) => onChange('age', value)}
        error={errors.age}
      />
      <Input
        label="Ville"
        id="city"
        placeholder="Ex : Lyon"
        value={form.city}
        onChange={(value) => onChange('city', value)}
        error={errors.city}
      />
      <Input
        label="Budget (€ / mois)"
        id="budget"
        inputMode="numeric"
        value={form.budget}
        onChange={(value) => onChange('budget', value)}
        error={errors.budget}
      />
      <InterestChips
        selected={form.interests}
        onChange={(value) => onChange('interests', value)}
        error={errors.interests}
      />
      <Input
        label="Courte bio (optionnel, 200 caractères max)"
        id="bio"
        multiline
        value={form.bio}
        onChange={(value) => onChange('bio', value)}
        error={errors.bio}
      />
    </>
  )
}

export default ProfileFields
