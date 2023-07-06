import React from 'react';

export const NameInput = ({ recipeData, handleInputChange }) => (
  <div className="form-row">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={recipeData.name}
      onChange={handleInputChange}
      required
    />
  </div>
);
