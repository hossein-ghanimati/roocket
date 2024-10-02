const getFromLocal = (key: string) => {
  const getItem = localStorage.getItem(`roocket-${key}`);
  return getItem ? JSON.parse(getItem) : null
}
const setToLocal = (key: string, value: any) => {
  localStorage.setItem(`roocket-${key}`, JSON.stringify(value));
}
const removeFromLocal = (key: string) => {
  localStorage.removeItem(`roocket-${key}`);
}
const getFromSession = (key: string) => {
  const getItem = sessionStorage.getItem(`roocket-${key}`);
  return getItem ? JSON.parse(getItem) : null
}
const setToSession = (key: string, value: any) => {
  sessionStorage.setItem(`roocket-${key}`, JSON.stringify(value));
}

export  {
  getFromLocal,
  setToLocal,
  removeFromLocal,
  getFromSession,
  setToSession
}