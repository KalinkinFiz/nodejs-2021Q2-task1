const priceRepo = require('./price.memory.repository');

const getAll = () => priceRepo.getAll();
const getById = (id) => priceRepo.getById(id);
const createPrice = ({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt }) =>
  priceRepo.createPrice({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt });
const deleteById = (id) => priceRepo.deleteById(id);
const updateById = ({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt }) =>
  priceRepo.updateById({ id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt });

module.exports = { getAll, getById, createPrice, deleteById, updateById };
