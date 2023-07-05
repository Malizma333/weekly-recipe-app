import './add_recipe_container.css';
import React, { useState } from 'react';

export const AddRecipeContainer = ({ setDivVisible }) => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    description: "",
    recipeLink: "",
    allergens: [],
    prepareTime: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAllergensChange = (e) => {
    const { options } = e.target;
    const selectedAllergens = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedAllergens.push(options[i].value);
      }
    }
    setRecipeData((prevData) => ({ ...prevData, allergens: selectedAllergens }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(recipeData);
    setRecipeData({
      name: "",
      description: "",
      recipeLink: "",
      allergens: [],
      prepareTime: ""
    });
    setDivVisible(false);
  };

  const handleFormCancel = () => {
    setRecipeData({
      name: "",
      description: "",
      recipeLink: "",
      allergens: [],
      prepareTime: ""
    });
    setDivVisible(false);
  };

  
  const form = (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={recipeData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={recipeData.description}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="recipeLink">Recipe Link:</label>
      <input
        type="text"
        id="recipeLink"
        name="recipeLink"
        value={recipeData.recipeLink}
        onChange={handleInputChange}
      />

      <label htmlFor="allergens">Allergens:</label>
      <select
        id="allergens"
        name="allergens"
        multiple
        value={recipeData.allergens}
        onChange={handleAllergensChange}
      >
        <option value="peanuts">Peanuts</option>
        <option value="treeNuts">Tree Nuts</option>
        <option value="milk">Milk</option>
        {/* Add more allergen options */}
      </select>

      <label htmlFor="prepareTime">Prepare Time:</label>
      <input
        type="time"
        id="prepareTime"
        name="prepareTime"
        value={recipeData.prepareTime}
        onChange={handleInputChange}
        required
      />

      <div>
        <button type="submit">Add</button>
        <button type="button" onClick={handleFormCancel}>Cancel</button>
      </div>
    </form>
  )

  return (
    <div className="add-recipe-container">
      <div className="content">
        <h3>New Recipe</h3>
        {form}
      </div>
    </div>
  );
}