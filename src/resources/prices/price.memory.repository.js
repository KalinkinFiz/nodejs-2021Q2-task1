const Price = require('./price.model');

const Prices = [new Price()];

const getAll = async () => Prices;

const getById = async (id) => Prices.find((price) => Price.id === id);

const createPrice = async ({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt }) => {
  const price = new Price({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt });
  Prices.push(price);
  return price;
};

const getPricesById = async (id) => {
  const prices = [];
  Prices.forEach((price) => {
    if (price.scheduleId === id) prices.push(price);
  });
  return prices;
};

const deleteById = async (id) => {
  const pricePosition = Prices.findIndex((price) => price.id === id);

  if (pricePosition === -1) return null;

  const priceDeletable = Prices[pricePosition];

  Prices.splice(pricePosition, 1);
  return priceDeletable;
};

const updateById = async ({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt }) => {
  const pricePosition = Prices.findIndex((price) => price.id === id);

  if (pricePosition === -1) return null;

  const oldPrice = Prices[pricePosition];
  const newPrice = { ...oldPrice, scheduleId, priceValue, priceCurrency, createdAt, updatedAt };

  Prices.splice(pricePosition, 1, newPrice);
  return newPrice;
};

module.exports = {
  Prices,
  getAll,
  getPricesById,
  getById,
  createPrice,
  deleteById,
  updateById,
};
