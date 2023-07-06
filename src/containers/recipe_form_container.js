import './recipe_form_container.css';
import { RecipeForm } from '../components/recipe_form';

export const AddRecipeContainer = ({ close }) => {
  return (
    <div className="add-recipe-container">
      <div className="content">
        <h3>New Recipe</h3>
        <RecipeForm closeForm={close} />
      </div>
    </div>
  );
}