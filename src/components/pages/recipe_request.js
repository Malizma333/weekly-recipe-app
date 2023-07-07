import './recipe_request.css';

export const RecipeRequest = () => {
  return (
    <div>
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
    </div>
  )
}