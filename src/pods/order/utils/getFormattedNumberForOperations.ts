export const getFormattedNumberForOperations = (value: string) => {
  return parseFloat(value.replace(/\./g, "").replace(",", "."));
};
