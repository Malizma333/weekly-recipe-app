import './action_container.css'
import { Button } from '../components/button';
import { sheetUrl } from '../constants';

export const ActionContainer = ({ addRecipeClick }) => {
  return (
    <div className="action-container">
      <Button name='Shuffle' icon='shuffle_icon.svg' onClick={onShuffle} tooltip='Shuffle Recipes' />
      <Button name='Add Recipe' icon='add_icon.svg' onClick={addRecipeClick} tooltip='Add New Recipe' />
      <Button name='Settings' icon='settings_icon.svg' onClick={onSettings} tooltip='Settings' />
      <Button name='Link' icon='link_icon.svg' onClick={onLink} tooltip='Go To Spreadsheet' />
      <Button name='Request Meal' icon='request_icon.svg' onClick={onRequest} tooltip='Request Meal' />
    </div>
  );
}

const onShuffle = () => {
  console.log("Shuffling");
}

const onSettings = () => {
  console.log("Settings");
}

const onLink = () => {
  window.open(sheetUrl, '_blank');
}

const onRequest = () => {
  console.log("Request Meal");
}
