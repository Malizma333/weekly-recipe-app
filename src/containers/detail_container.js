import './detail_container.css';
import { RecipeDetails } from '../components/recipe_details';
import { WelcomeScreen } from '../components/welcome_screen';

export const DetailContainer = ({ selectedRecipe }) => {
  return (
    <div className="detail-container">
      {selectedRecipe && <RecipeDetails selectedRecipe = {selectedRecipe} />}
      {!selectedRecipe && <WelcomeScreen />}
    </div>
  );
}