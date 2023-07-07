import './action_container.css'
import { Button } from '../components/button';
import { sheetUrl } from '../constants';
import { shuffleRecipes } from '../utils/recipe_shuffler';

export const ActionContainer = ({ setPage, setMealSchedule }) => {
  const handleShuffleClick = () => {
    const updatedMealSchedule = shuffleRecipes();
    setMealSchedule(updatedMealSchedule);
  }

  return (
    <div className="action-container">
      <Button
        name='Shuffle' 
        icon='shuffle_icon.svg' 
        onClick={handleShuffleClick} 
        tooltip='Shuffle Recipes'
      />
      <Button
        name='Add Recipe' 
        icon='add_icon.svg' 
        onClick={() => setPage('newRecipe')} 
        tooltip='Add New Recipe'
      />
      <Button 
        name='Settings' 
        icon='settings_icon.svg' 
        onClick={() => setPage('settings')} 
        tooltip='Settings' 
      />
      <Button 
        name='Link' 
        icon='link_icon.svg' 
        onClick={() => window.open(sheetUrl, '_blank')} 
        tooltip='Go To Spreadsheet' 
      />
      <Button 
        name='Request Meal' 
        icon='request_icon.svg' 
        onClick={() => setPage('mealRequest')} 
        tooltip='Request Meal' 
      />
    </div>
  );
}

