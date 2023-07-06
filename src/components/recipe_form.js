import React, { useState } from 'react';
import './recipe_form.css';
import { NameInput } from './recipe_form/name_input';
import { DescriptionInput } from './recipe_form/description_input';
import { RecipeLinkInput } from './recipe_form/recipe_link';
import { AllergenDropdown } from './recipe_form/allergen_dropdown';
import { SelectedAllergensList } from './recipe_form/allergen_selection';
import { PrepareTimeInput } from './recipe_form/prepare_time';
import { FormButtons } from './recipe_form/form_buttons';

export const RecipeForm = ({ setDivVisible }) => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    description: '',
    recipeLink: '',
    allergens: [],
    prepareTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const handleAllergenSelect = (e) => {
    const selectedAllergen = e.target.options[e.target.selectedIndex];

    if (selectedAllergen.value === '') return;
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
      name: '',
      description: '',
      recipeLink: '',
      allergens: [],
      prepareTime: '',
    });
    setDivVisible(false);
  };

  const handleFormCancel = () => {
    setRecipeData({
      name: '',
      description: '',
      recipeLink: '',
      allergens: [],
      prepareTime: '',
    });
    setDivVisible(false);
  };

  const allergenOptions = [
    { value: '', label: 'Select Allergen' },
    { value: 'peanuts', label: 'Peanuts' },
    { value: 'treeNuts', label: 'Tree Nuts' },
    { value: 'milk', label: 'Milk' },
  ];

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleFormSubmit}>
        <NameInput recipeData={recipeData} handleInputChange={handleInputChange} />
        <DescriptionInput recipeData={recipeData} handleInputChange={handleInputChange} />
        <RecipeLinkInput recipeData={recipeData} handleInputChange={handleInputChange} />
        <AllergenDropdown
          handleAllergenSelect={handleAllergenSelect}
          allergenOptions={allergenOptions}
        />
        <SelectedAllergensList
          selectedAllergens={selectedAllergens}
          handleAllergenRemove={handleAllergenRemove}
        />
        <PrepareTimeInput recipeData={recipeData} handleInputChange={handleInputChange} />
        <FormButtons handleFormSubmit={handleFormSubmit} handleFormCancel={handleFormCancel} />
      </form>
    </div>
  );
};
