import './action_container.css'
import { Button } from '../components/button';
import { sheetUrl } from '../constants';

export const ActionContainer = ({ addRecipeClick }) => {
  return (
    <div className="action-container">
      <Button name='Shuffle' icon='shuffle_icon.png' onClick={onShuffle} tooltip='Shuffle Recipes' />
      <Button name='Add Recipe' icon='add_icon.png' onClick={addRecipeClick} tooltip='Add New Recipe' />
      <Button name='Settings' icon='settings_icon.png' onClick={onSettings} tooltip='Settings' />
      <Button name='Link' icon='link_icon.png' onClick={onLink} tooltip='Go To Spreadsheet' />
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