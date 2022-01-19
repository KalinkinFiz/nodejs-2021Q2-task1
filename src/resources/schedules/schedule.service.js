const scheduleRepo = require('./schedule.memory.repository');
const priceRepo = require('../prices/price.memory.repository');

const getAll = () => scheduleRepo.getAll();
const getById = (id) => scheduleRepo.getById(id);
const createSchedule = ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }) =>
  scheduleRepo.createSchedule({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt });
const deleteById = (id) => scheduleRepo.deleteById(id);
const updateById = ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }) =>
  scheduleRepo.updateById({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt });
const getPricesById = (id) => priceRepo.getPricesById(id);

module.exports = { getAll, getById, getPricesById, createSchedule, deleteById, updateById };
