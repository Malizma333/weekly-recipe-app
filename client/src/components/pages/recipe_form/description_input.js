import React from 'react';

export const DescriptionInput = ({ recipeData, handleInputChange, fieldName }) => {
  return (
    <div className="form-row">
      <label htmlFor="description">Description</label>
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
