import { TPrice } from './price.types';
import { Price } from './price.model';

const Prices = [new Price()];

const getAll = async () => Prices;

const getById = async (id: string) => Prices.find((price) => price.id === id);

const createPrice = async ({
  id, 
  scheduleId, 
  priceValue, 
  priceCurrency, 
  createdAt, 
  updatedAt,
}: TPrice) => {
  const price = new Price(id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt);
  Prices.push(price);
  return price;
};

const getPricesById = async (id: String) => {
  const pricePosition = Prices.findIndex((price) => price.scheduleId === id);
  if (pricePosition === -1) return null;
  const prices = Prices[pricePosition];
  return prices;
};

const deleteById = async (id: String) => {
  const pricePosition = Prices.findIndex((price) => price.id === id);

  if (pricePosition === -1) return null;

  const priceDeletable = Prices[pricePosition];

  Prices.splice(pricePosition, 1);
  return priceDeletable;
};

const updateById = async ({
  id, 
  scheduleId, 
  priceValue, 
  priceCurrency, 
  createdAt, 
  updatedAt,
}: TPrice) => {
  const pricePosition = Prices.findIndex((price) => price.id === id);

  if (pricePosition === -1) return null;

  const oldPrice = Prices[pricePosition];
  const newPrice = {
    ...oldPrice,
    id, 
    scheduleId, 
    priceValue, 
    priceCurrency, 
    createdAt, 
    updatedAt,
  };

  Prices.splice(pricePosition, 1, newPrice);
  return newPrice;
};

export { Prices, getAll, getPricesById, getById, createPrice, deleteById, updateById };
