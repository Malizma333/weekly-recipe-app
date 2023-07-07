import './settings_container.css';
import { useState, useEffect } from 'react';
import { weekDays, colorPalette, dataKeys } from '../constants';
import { saveData, loadData } from '../services/locals_retrieval';
import { defaultBrinnerIndex, defaultIsDarkMode } from '../constants';

export const SettingsContainer = ({ close }) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultIsDarkMode);
  const [brinnerDay, setBrinnerDay] = useState(defaultBrinnerIndex);

  useEffect(() => {
    const storedSettings = loadData(dataKeys.settings);
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
    saveData(updatedSettings, dataKeys.settings);

    if(updatedSettings.isDarkMode) {
      document.documentElement.style.setProperty(
        '--primary-color', colorPalette.primaryColorDark);
      document.documentElement.style.setProperty(
        '--secondary-color', colorPalette.secondaryColorDark);
      document.documentElement.style.setProperty(
        '--text-color', colorPalette.textColorDark);
    } else {
      document.documentElement.style.setProperty(
        '--primary-color', colorPalette.primaryColorLight);
      document.documentElement.style.setProperty(
        '--secondary-color', colorPalette.secondaryColorLight);
      document.documentElement.style.setProperty(
        '--text-color', colorPalette.textColorLight);
    }
  };

  const handleDaySelection = (event) => {
    const dayIndex = event.target.selectedIndex;
  
    const updatedSettings = {
      isDarkMode,
      brinnerDay: dayIndex,
    };
  
    setBrinnerDay(dayIndex);
    saveData(updatedSettings, dataKeys.settings);
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
      <div className="settings-content">
        <h3>Settings</h3>
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
