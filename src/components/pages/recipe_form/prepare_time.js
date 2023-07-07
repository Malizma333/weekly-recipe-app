import React from 'react';

export const PrepareTimeInput = ({ recipeData, handleInputChange, fieldName }) => {
  return (
    <div className="form-row">
      <label htmlFor={fieldName}>Prepare Time</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={recipeData[fieldName]}
        onChange={handleInputChange}
        placeholder="HH:MM"
        pattern="[0-9]{2}:[0-9]{2}"
      />
    </div>
  );
};
