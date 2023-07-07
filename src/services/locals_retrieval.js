export function saveData(data, key) {
  const dataString = JSON.stringify(data);
  localStorage.setItem(key, dataString);
}

export function loadData(key) {
  const storedDataString = localStorage.getItem(key);
  if (storedDataString) {
    return JSON.parse(storedDataString);
  }
  return null;
}
