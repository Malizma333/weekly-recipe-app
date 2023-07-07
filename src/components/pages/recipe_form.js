import './recipe_form.css';
import React, { useState } from 'react';

import { NameInput } from './recipe_form/name_input';
import { DescriptionInput } from './recipe_form/description_input';
import { RecipeLinkInput } from './recipe_form/recipe_link';
import { AllergenDropdown } from './recipe_form/allergen_dropdown';
import { SelectedAllergensList } from './recipe_form/allergen_selection';
import { PrepareTimeInput } from './recipe_form/prepare_time';
import { FormButtons } from './recipe_form/form_buttons';

import { writeRecipeDataToCSV } from '../../services/recipe_data_write';
import { tableHeaders, allergenOptions } from '../../constants';
import isURL from 'validator/lib/isURL';

export const RecipeForm = ({ closeForm }) => {
  const recipeTemplate = {};

  for (const key in tableHeaders) {
    recipeTemplate[tableHeaders[key]] = '';
  }

  const [recipeData, setRecipeData] = useState(recipeTemplate);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAllergenSelect = (e) => {
    const selectedAllergen = e.target.options[e.target.selectedIndex];
    const fieldName = tableHeaders.allergens
  
    if (selectedAllergen.value === '') return;
    if (recipeData[fieldName].includes(selectedAllergen.text)) return;
  
    const updatedAllergens = recipeData[fieldName]
      ? `${recipeData[fieldName]},${selectedAllergen.text}`
      : selectedAllergen.text;
  
    setRecipeData((prevData) => ({ ...prevData, [fieldName]: updatedAllergens }));
  };
  
  const handleAllergenRemove = (allergen) => {
    const fieldName = tableHeaders.allergens
    const updatedAllergens = recipeData[fieldName]
      .split(',')
      .filter((selected) => selected.trim() !== allergen.trim())
      .join(',');
  
    setRecipeData((prevData) => ({ ...prevData, [fieldName]: updatedAllergens }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValidRecipeLink = 
      recipeData[tableHeaders.link].trim() === '' ||
      isURL(recipeData[tableHeaders.link]);

    if (!isValidRecipeLink) {
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

  return (
    <div className="recipe-form-container">
      <form onSubmit={handleFormSubmit}>
        <NameInput
          fieldName={tableHeaders.name}
          recipeData={recipeData}
          handleInputChange={handleInputChange}
        />
        <DescriptionInput
          fieldName={tableHeaders.desc}
          recipeData={recipeData}
          handleInputChange={handleInputChange}
        />
        <AllergenDropdown
          fieldName={tableHeaders.allergens}
          allergenOptions={allergenOptions}
          handleAllergenSelect={handleAllergenSelect}
        />
        <SelectedAllergensList
          selectedAllergens={recipeData[tableHeaders.allergens]}
          handleAllergenRemove={handleAllergenRemove}
        />
        <RecipeLinkInput
          fieldName={tableHeaders.link}
          recipeData={recipeData}
          handleInputChange={handleInputChange} 
        />
        <PrepareTimeInput
          recipeData={recipeData}
          handleInputChange={handleInputChange}
          fieldName={tableHeaders.time}
        />
        <FormButtons
          handleFormSubmit={handleFormSubmit}
          handleFormCancel={handleFormCancel}
        />
      </form>
    </div>
  );
};
