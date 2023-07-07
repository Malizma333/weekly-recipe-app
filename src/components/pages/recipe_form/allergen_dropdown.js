import React from 'react';

export const AllergenDropdown = ({ handleAllergenSelect, allergenOptions, fieldName }) => {  
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
