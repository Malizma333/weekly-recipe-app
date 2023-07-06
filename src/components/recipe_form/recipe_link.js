import React from 'react';

export const RecipeLinkInput = ({ recipeData, handleInputChange }) => (
  <div className="form-row">
    <label htmlFor="recipeLink">Recipe Link:</label>
    <input
      type="text"
      id="recipeLink"
      name="recipeLink"
      value={recipeData.recipeLink}
      onChange={handleInputChange}
    />
  </div>
);
