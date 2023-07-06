import React from 'react';
import { tableHeaders } from '../../constants';

export const NameInput = ({ recipeData, handleInputChange }) => {
  const fieldName = tableHeaders.find((header) => header.toLowerCase() === 'recipe name');

  return (
    <div className="form-row">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={recipeData[fieldName]}
        onChange={handleInputChange}
        required
      />
    </div>
  )
};
