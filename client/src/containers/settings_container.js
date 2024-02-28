import './settings_container.css';
import { useState, useEffect } from 'react';
import { colorPalette, dataKeys } from '../constants';
import { saveData, loadData } from '../services/locals_retrieval';
import { defaultBrinnerIndex, defaultIsDarkMode } from '../constants';
import { Settings } from '../components/pages/settings';

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

  const handleThemeToggle = () => {
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

  return (
    <div className="settings-container">
      <div className="settings-content">
        <h3>Settings</h3>
        <Settings
          isDarkMode={isDarkMode}
          toggleTheme={handleThemeToggle}
          brinnerDay={brinnerDay}
          daySelection={handleDaySelection}
        />
        <button className="close-btn" onClick={close}>
          X
        </button>
      </div>
    </div>
  );
};
