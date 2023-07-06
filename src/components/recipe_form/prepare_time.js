import React from 'react';

export const PrepareTimeInput = ({ recipeData, handleInputChange }) => (
  <div className="form-row">
    <label htmlFor="prepareTime">Prepare Time:</label>
    <input
      type="text"
      id="prepareTime"
      name="prepareTime"
      value={recipeData.prepareTime}
      onChange={handleInputChange}
      placeholder="HH:MM"
      pattern="[0-9]{2}:[0-9]{2}" // Enforce HH:MM format
      required
    />
  </div>
);
