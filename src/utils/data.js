export const optionLabel = (id, options) => {
  return options.find((option) => option.id === id).label || '-';
};
