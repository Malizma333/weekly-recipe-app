import './add_recipe_form.css'
import React, { useState } from 'react';

export const RecipeForm = ({ setDivVisible }) => {
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

  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const handleAllergenSelect = (e) => {
    const selectedAllergen = e.target.options[e.target.selectedIndex];

    if(selectedAllergen.value === '') return;
    if (selectedAllergens.includes(selectedAllergen.text)) return;
    
    setSelectedAllergens([...selectedAllergens, selectedAllergen.text]);
  };

  const handleAllergenRemove = (allergen) => {
    const updatedAllergens = selectedAllergens.filter(
      (selected) => selected !== allergen
    );
    setSelectedAllergens(updatedAllergens);
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

  const allergenOptions = [
    { value: "", label: "Select Allergen" },
    { value: "peanuts", label: "Peanuts" },
    { value: "treeNuts", label: "Tree Nuts" },
    { value: "milk", label: "Milk" },
  ];

  const form = (
      <form onSubmit={handleFormSubmit}>
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

      <div>
        <label htmlFor="allergenDropdown">Allergens:</label>
        <select
          id="allergenDropdown"
          name="allergenDropdown"
          placeholder="Select Allergens"
          onChange={handleAllergenSelect}
        >
          {allergenOptions.map((allergen, index) => (
            <option 
              key={index} 
              value={allergen.value}
            >
              {allergen.label}
            </option>
          ))}
        </select>
      </div>

      <div className='allergen-list'>
        <p>Selected Allergens:</p>
        <ul>
          {selectedAllergens.map((allergen) => (
            <li key={allergen}>
              {allergen}
              <button onClick={() => handleAllergenRemove(allergen)}>X</button>
            </li>
          ))}
        </ul>
      </div>

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

      <div className="form-row">
        <button type="submit">Add</button>
        <button type="button" onClick={handleFormCancel}>Cancel</button>
      </div>
    </form>
  )

  return (
    <div className='recipe-form-container'>
      {form}
    </div>
  )
}