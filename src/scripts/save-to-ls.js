export function saveToLS(key = 'empty', value = '') {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}
