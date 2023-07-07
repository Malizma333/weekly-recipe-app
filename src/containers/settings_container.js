import './settings_container.css';
import { useState, useEffect } from 'react';
import { weekDays } from '../constants';

export const SettingsContainer = ({ close }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [brinnerDay, setBrinnerDay] = useState('Tuesday');

  useEffect(() => {
    const storedSettingsString = localStorage.getItem('settings');
    if (storedSettingsString) {
      const storedSettings = JSON.parse(storedSettingsString);
      setIsDarkMode(storedSettings.isDarkMode);
      setBrinnerDay(storedSettings.brinnerDay);
    }
  }, []);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);

    const updatedSettings = {
      isDarkMode: !isDarkMode,
      brinnerDay,
    };

    localStorage.setItem('settings', JSON.stringify(updatedSettings));
  };

  const handleDaySelection = (event) => {
    const day = event.target.value;

    if (day === '') return;

    const updatedSettings = {
      isDarkMode,
      brinnerDay: day,
    };

    setBrinnerDay(day);
    localStorage.setItem('settings', JSON.stringify(updatedSettings));
  };

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
    <div className="settings-container">
      <div className="content">
        <h3>Settings</h3>
        <div className="setting-area">
          <label>
            Dark Modes
          </label>        
          <label htmlFor="darkModeToggle">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="darkmode-checkbox"
              checked={isDarkMode}
              onChange={handleDarkModeToggle}
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
              onChange={handleDaySelection}
            >
              {weekDays.map((weekday, index) => (
                <option key={index} value={weekday}>
                  {weekday}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button className="close-btn" onClick={close}>
          X
        </button>
      </div>
    </div>
  );
};
