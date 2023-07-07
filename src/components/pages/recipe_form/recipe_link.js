import './form_error.css'
import React from 'react';
import isURL from 'validator/lib/isURL';

export const RecipeLinkInput = ({ recipeData, handleInputChange, fieldName }) => {
  const urlValue = recipeData[fieldName];
  const isValidURL = urlValue.trim() === '' || isURL(urlValue);

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
      {!isValidURL && <p className="error-message">Invalid URL format</p>}
    </div>
  );
}
