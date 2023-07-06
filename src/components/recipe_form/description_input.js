import React from 'react';
import { tableHeaders } from '../../constants';

export const DescriptionInput = ({ recipeData, handleInputChange }) => {
  const fieldName = tableHeaders.find((header) => header.toLowerCase() === 'description');
  return (
    <div className="form-row">
      <label htmlFor="description">Description:</label>
      <textarea
        id={fieldName}
        name={fieldName}
        value={recipeData[fieldName]}
        onChange={handleInputChange}
        required
      />
    </div>
  );
}
