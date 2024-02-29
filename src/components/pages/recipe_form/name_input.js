import React from 'react';

export const NameInput = ({ recipeData, handleInputChange, fieldName }) => {
  return (
    <div className="form-row">
      <label htmlFor="name">Name</label>
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
