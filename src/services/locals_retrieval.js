export function saveSettings(settings) {
  const settingsString = JSON.stringify(settings);
  localStorage.setItem('settings', settingsString);
}

export function loadSettings() {
  const storedSettingsString = localStorage.getItem('settings');
  if (storedSettingsString) {
    return JSON.parse(storedSettingsString);
  }
  return null;
}