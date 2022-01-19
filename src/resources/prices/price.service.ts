import * as priceRepo from './price.memory.repository';
import { TPrice } from './price.types';

const getAll = () => priceRepo.getAll();
const getById = (id: string) => priceRepo.getById(id);
const createPrice = ({
  id, 
  scheduleId, 
  priceValue, 
  priceCurrency, 
  createdAt, 
  updatedAt,
}: TPrice) =>
  priceRepo.createPrice({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt });
const deleteById = (id: string) => priceRepo.deleteById(id);
const updateById = ({
  id, 
  scheduleId, 
  priceValue, 
  priceCurrency, 
  createdAt, 
  updatedAt,
}: TPrice) =>
  priceRepo.updateById({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt });

export { getAll, getById, createPrice, deleteById, updateById };
