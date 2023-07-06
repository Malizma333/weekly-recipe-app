import React from 'react';

export const SelectedAllergensList = ({ selectedAllergens, handleAllergenRemove }) => (
  <div className="allergen-list">
    <p>Selected Allergens:</p>
    <ul>
      {selectedAllergens.map((allergen) => (
        <li key={allergen}>
          {allergen}
          <button onClick={() => handleAllergenRemove(allergen)}>X</button>
        </li>
      ))}
    </ul>
  </div>
);
