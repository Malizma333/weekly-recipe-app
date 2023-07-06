import './action_container.css'
import { Button } from '../components/button';

export const ActionContainer = ({ addRecipeClick }) => {
  return (
    <div className="action-container">
      <Button name='Shuffle' icon='shuffle_icon.png' onClick={onShuffle} tooltip='Shuffle Recipes' />
      <Button name='Add Recipe' icon='add_icon.png' onClick={addRecipeClick} tooltip='Add New Recipe' />
      <Button name='Settings' icon='settings_icon.png' onClick={onSettings} tooltip='Settings' />
    </div>
  );
}

const onShuffle = () => {
  console.log("Shuffling");
}

const onSettings = () => {
  console.log("Settings");
}