import React from 'react';

export const AllergenDropdown = ({ handleAllergenSelect, allergenOptions }) => (
  <div>
    <label htmlFor="allergenDropdown">Allergens:</label>
    <select
      id="allergenDropdown"
      name="allergenDropdown"
      placeholder="Select Allergens"
      onChange={handleAllergenSelect}
    >
      {allergenOptions.map((allergen, index) => (
        <option key={index} value={allergen.value}>
          {allergen.label}
        </option>
      ))}
    </select>
  </div>
);
