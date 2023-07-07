import './recipe_request_container.css';
import { RecipeRequest } from '../components/pages/recipe_request';

export const RecipeRequestContainer = ({ close }) => {
  return (
    <div className="recipe-request-container">
      <div className="recipe-request-content">
        <h3>Recipe Request</h3>
        <RecipeRequest />
        <button className="close-btn" onClick={close}>
          X
        </button>
      </div>
    </div>
  );
};
