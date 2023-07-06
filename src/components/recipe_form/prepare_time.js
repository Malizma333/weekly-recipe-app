import React from 'react';
import { tableHeaders } from '../../constants';

export const PrepareTimeInput = ({ recipeData, handleInputChange }) => {
  const fieldName = tableHeaders.find((header) => header.toLowerCase() === 'prepare time');

  return (
    <div className="form-row">
      <label htmlFor={fieldName}>Prepare Time:</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={recipeData[fieldName]}
        onChange={handleInputChange}
        placeholder="HH:MM"
        pattern="[0-9]{2}:[0-9]{2}" // Enforce HH:MM format
        required
      />
    </div>
  );
};
