import './recipe_request.css';
import { recipeSheetData } from '../../services/recipe_retrieval';
import { tableHeaders } from '../../constants';

export const RecipeRequest = ({
  selectedRequest, requestedMeals,
  requestChange, requestSubmit, removeRequest
}) => {
  return (
    <div>
      <div className="request-area">
        <label>Choose Request</label>
        <select
          value={selectedRequest}
          onChange={requestChange}
          disabled={requestedMeals.length >= 6}
        >
          <option value=''>Select Meal</option>
          {recipeSheetData.map((mealData, index) => (
            <option
              key={index}
              value={mealData[tableHeaders.name]}
              disabled={requestedMeals.some(
                recipe => recipe[tableHeaders.name] === mealData[tableHeaders.name]
              )}
            >
              {mealData[tableHeaders.name]}
            </option>
          ))}
        </select>
        <button onClick={requestSubmit}>Add Request</button>
      </div>
      {requestedMeals.length > 0 && (
        <div className='requested-list'>
          <label>Requested Meals</label>
          <div>
            <ul>
              {requestedMeals.map((mealData, index) => (
                <li key={index}>
                  {mealData[tableHeaders.name]}
                  <button onClick={() => removeRequest(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
