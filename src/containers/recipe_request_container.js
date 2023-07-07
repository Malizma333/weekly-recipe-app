import './recipe_request_container.css';

export const RecipeRequestContainer = ({ close }) => {
  return (
    <div className="recipe-request-container">
      <div className="recipe-request-content">
        <h3>Recipe Request</h3>
        <div className="request-area">
          <label>
            Choose Request
          </label>
          {/* <select
            id="mealListDropdown"
            value={brinnerDay}
            onChange={handleDaySelection}
          >
            {weekDays.map((weekday, index) => (
              <option key={index} value={index}>
                {weekday}
              </option>
            ))}
          </select> */}
        </div>
        <div className="request-area">
          <label>
            Requested Meals
          </label>
        </div>
        <button className="close-btn" onClick={close}>
          X
        </button>
      </div>
    </div>
  );
};
