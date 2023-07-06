import './add_recipe_container.css';
import { RecipeForm } from '../components/add_recipe_form';

export const AddRecipeContainer = ({ setDivVisible }) => {
  return (
    <div className="add-recipe-container">
      <div className="content">
        <h3>New Recipe</h3>
        <RecipeForm setDivVisible={ setDivVisible } />
      </div>
    </div>
  );
}