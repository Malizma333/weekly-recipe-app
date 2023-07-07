import './recipe_form.css';
import React, { useState } from 'react';

import { NameInput } from './recipe_form/name_input';
import { DescriptionInput } from './recipe_form/description_input';
import { RecipeLinkInput } from './recipe_form/recipe_link';
import { AllergenDropdown } from './recipe_form/allergen_dropdown';
import { SelectedAllergensList } from './recipe_form/allergen_selection';
import { PrepareTimeInput } from './recipe_form/prepare_time';
import { FormButtons } from './recipe_form/form_buttons';

import { writeRecipeDataToCSV } from '../services/recipe_data_write';
import { tableHeaders } from '../constants';
import isURL from 'validator/lib/isURL';

export const RecipeForm = ({ closeForm }) => {
  const recipeTemplate = tableHeaders.reduce((acc, header) => {
    acc[header] = '';
    return acc;
  }, {});

  const [recipeData, setRecipeData] = useState(recipeTemplate);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldName = tableHeaders.find(header => header.toLowerCase() === name.toLowerCase());
    if (fieldName) {
      setRecipeData((prevData) => ({ ...prevData, [fieldName]: value }));
    }
  };

  const handleAllergenSelect = (e) => {
    const selectedAllergen = e.target.options[e.target.selectedIndex];
    const fieldName = tableHeaders.find((header) => header.toLowerCase() === 'allergens');
  
    if (selectedAllergen.value === '') return;
    if (recipeData[fieldName].includes(selectedAllergen.text)) return;
  
    const updatedAllergens = recipeData[fieldName]
      ? `${recipeData[fieldName]},${selectedAllergen.text}`
      : selectedAllergen.text;
  
    setRecipeData((prevData) => ({ ...prevData, [fieldName]: updatedAllergens }));
  };
  
  const handleAllergenRemove = (allergen) => {
    const fieldName = tableHeaders.find((header) => header.toLowerCase() === 'allergens');
    const updatedAllergens = recipeData[fieldName]
      .split(',')
      .filter((selected) => selected.trim() !== allergen.trim())
      .join(',');
  
    setRecipeData((prevData) => ({ ...prevData, [fieldName]: updatedAllergens }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValidRecipeLink = 
      recipeData[tableHeaders[3]].trim() === '' ||
      isURL(recipeData[tableHeaders[3]]);

    if (!isValidRecipeLink) {
      console.log('Invalid recipe link');
      return;
    }

    writeRecipeDataToCSV(recipeData);
    setRecipeData(recipeTemplate);
    closeForm();
  };

  const handleFormCancel = () => {
    setRecipeData(recipeTemplate);
    closeForm();
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
          selectedAllergens={recipeData[tableHeaders[2]]}
          handleAllergenRemove={handleAllergenRemove}
        />
        <PrepareTimeInput recipeData={recipeData} handleInputChange={handleInputChange} />
        <FormButtons handleFormSubmit={handleFormSubmit} handleFormCancel={handleFormCancel} />
      </form>
    </div>
  );
};
