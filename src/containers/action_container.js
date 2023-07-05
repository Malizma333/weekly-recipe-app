import './action_container.css'
import { Button } from '../components/button';

export const ActionContainer = () => {
  return (
    <div className="action-container">
      {Button("Shuffle", 'shuffle_icon.png', onShuffle, 'Shuffle Recipes')}
      {Button("Add Recipe", 'add_icon.png', onAdd, 'Add New Recipe')}
      {Button("Settings", 'settings_icon.png', onSettings, 'Settings')}
    </div>
  );
}

const onShuffle = () => {
  console.log("Shuffling");
}

const onAdd = () => {
  console.log("Adding");
}

const onSettings = () => {
  console.log("Settings");
}