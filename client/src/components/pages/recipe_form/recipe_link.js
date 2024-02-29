import './form_error.css'
import React from 'react';

export const RecipeLinkInput = ({ recipeData, handleInputChange, fieldName }) => {
  return (
    <div className="form-row">
      <label htmlFor="recipeLink">Recipe Link</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={recipeData[fieldName]}
        onChange={handleInputChange}
        placeholder='https://www.example.com'
      />
    </div>
  );
}
