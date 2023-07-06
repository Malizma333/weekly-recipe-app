import React from 'react';
import { tableHeaders } from '../../constants';

export const AllergenDropdown = ({ handleAllergenSelect, allergenOptions }) => {
  const fieldName = tableHeaders.find((header) => header.toLowerCase() === 'allergens');
  
  return (
    <div className='form-row'>
      <label htmlFor={fieldName}>{fieldName}</label>
      <select
        id={fieldName}
        name={fieldName}
        placeholder={`Select ${fieldName}`}
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
};
