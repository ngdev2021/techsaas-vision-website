// utils/localStorageUtils.js

export const saveLastChosenTier = (tier) => {
  localStorage.setItem('lastChosenTier', tier);
};

export const getLastChosenTier = () => {
  return localStorage.getItem('lastChosenTier') || 'Freshman'; // Default to 'Freshman' if nothing is stored
};
