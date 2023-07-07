import './settings.css'
import { weekDays } from "../../constants";

export const Settings = ({ isDarkMode, toggleTheme, brinnerDay, daySelection}) => {
  const renderModeIcon = () => {
    return isDarkMode ? (
      <img
        src={`${process.env.PUBLIC_URL}/icons/moon_icon.svg`}
        alt="Moon Icon"
        className="checkbox-icon"
      />
    ) : (
      <img
        src={`${process.env.PUBLIC_URL}/icons/sun_icon.svg`}
        alt="Sun Icon"
        className="checkbox-icon"
      />
    );
  };

  return (
    <div>
      <div className="setting-area">
        <label>
          Color Mode
        </label>        
        <label htmlFor="darkModeToggle">
          <input
            type="checkbox"
            id="darkModeToggle"
            className="darkmode-checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className="custom-checkbox"></span>
          <span className="checkbox-icon">{renderModeIcon()}</span>
        </label>
      </div>
      <div className="setting-area">
        <label>
          Brinner Day
        </label>
        <label htmlFor="dayDropdown">
        <select
          id="dayDropdown"
          value={brinnerDay}
          onChange={daySelection}
        >
          {weekDays.map((weekday, index) => (
            <option key={index} value={index}>
              {weekday}
            </option>
          ))}
        </select>
        </label>
      </div>
    </div>
  )
}