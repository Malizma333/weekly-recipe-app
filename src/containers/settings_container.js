import './settings_container.css';
import { useState, useEffect } from 'react';
import { weekDays } from '../constants';
import { saveSettings, loadSettings } from '../services/locals_retrieval';
import { defaultBrinnerIndex } from '../constants';

export const SettingsContainer = ({ close }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [brinnerDay, setBrinnerDay] = useState(defaultBrinnerIndex);

  useEffect(() => {
    const storedSettings = loadSettings();
    if (storedSettings) {
      setIsDarkMode(storedSettings.isDarkMode);
      setBrinnerDay(storedSettings.brinnerDay);
    }
  }, []);

  const handleDarkModeToggle = () => {
    const updatedSettings = {
      isDarkMode: !isDarkMode,
      brinnerDay,
    };
  
    setIsDarkMode(!isDarkMode);
    saveSettings(updatedSettings);
  };

  const handleDaySelection = (event) => {
    const dayIndex = event.target.selectedIndex;
  
    const updatedSettings = {
      isDarkMode,
      brinnerDay: dayIndex,
    };
  
    setBrinnerDay(dayIndex);
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
            Dark Mode
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
              <option key={index} value={index}>
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
