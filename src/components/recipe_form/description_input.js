import React from 'react';

export const DescriptionInput = ({ recipeData, handleInputChange }) => (
  <div className="form-row">
    <label htmlFor="description">Description:</label>
    <textarea
      id="description"
      name="description"
      value={recipeData.description}
      onChange={handleInputChange}
      required
    />
  </div>
);
