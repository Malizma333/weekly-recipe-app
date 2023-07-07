import './action_container.css'
import { Button } from '../components/button';
import { sheetUrl, pages } from '../constants';
import { shuffleRecipes } from '../services/recipe_retrieval';

export const ActionContainer = ({ setPage, setMealSchedule }) => {
  const handleShuffleClick = () => {
    const updatedMealSchedule = shuffleRecipes();
    setMealSchedule(updatedMealSchedule);
  }

  return (
    <div className="action-container">
      <Button 
        name='Settings' 
        icon='settings_icon.svg' 
        onClick={() => setPage(pages.settings)} 
        tooltip='Settings' 
      />
      <Button
        name='Shuffle' 
        icon='shuffle_icon.svg' 
        onClick={handleShuffleClick} 
        tooltip='Shuffle Recipes'
      />
      <Button
        name='Add Recipe' 
        icon='add_icon.svg' 
        onClick={() => setPage(pages.newRecipe)} 
        tooltip='Add New Recipe'
      />
      <Button 
        name='Request Meal' 
        icon='request_icon.svg' 
        onClick={() => setPage(pages.recipeRequest)} 
        tooltip='Request Meal' 
      />
      <Button 
        name='Link' 
        icon='link_icon.svg' 
        onClick={() => window.open(sheetUrl, '_blank')} 
        tooltip='Go To Spreadsheet' 
      />
    </div>
  );
}

