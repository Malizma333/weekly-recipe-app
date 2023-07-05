import './action_container.css'
import { Button } from '../components/button';

export const ActionContainer = () => {
  return (
    <div className="action-container">
      {Button("Shuffle", 'shuffle_icon.png', onShuffle)}
      {Button("Add Recipe", 'add_icon.png', onAdd)}
      {Button("Settings", 'settings_icon.png', )}
    </div>
  );
}

const onShuffle = () => {
  console.log("Shuffling");
}

const onAdd = () => {
  console.log("Adding");
}