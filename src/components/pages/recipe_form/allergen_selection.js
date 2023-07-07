export const SelectedAllergensList = ({ selectedAllergens, handleAllergenRemove }) => {
  const allergensArray = selectedAllergens.split(",")
    .map((allergen) => allergen.trim())
    .filter((allergen) => allergen !== '')

  if (allergensArray.length === 0) {
    return null;
  }

  return (
    <div className="allergen-list">
      <p style={{ textDecoration: 'underline' }}>Selected Allergens</p>
      <ul>
        {allergensArray.map((allergen) => (
          <li key={allergen}>
            {allergen}
            <button onClick={() => handleAllergenRemove(allergen)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
