export const formatPrice = (cantidad) => {
  return Number(cantidad).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatPriceWithDiscount = (cantidad, discount) => {
  const price = cantidad * 1.1;

  return Number(price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
