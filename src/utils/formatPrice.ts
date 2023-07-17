type Price = number;

export const formatPrice = (price: Price) => {
  return `$${price.toFixed(2)}`;
};
