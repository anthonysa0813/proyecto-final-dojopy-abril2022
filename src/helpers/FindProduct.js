export const findProduct = (data, id) => {
  const filterArray = data.filter((item) => item.id === id);
  return filterArray[0];
};
