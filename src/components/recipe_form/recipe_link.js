import React from 'react';
import { tableHeaders } from '../../constants';

export const RecipeLinkInput = ({ recipeData, handleInputChange }) => {
  const fieldName = tableHeaders.find((header) => header.toLowerCase() === 'instructions');

  return (
    <div className="form-row">
      <label htmlFor="recipeLink">Recipe Link:</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={recipeData[fieldName]}
        onChange={handleInputChange}
      />
    </div>
  );
}
  
