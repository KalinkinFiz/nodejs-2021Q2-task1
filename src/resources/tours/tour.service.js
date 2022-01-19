const tourRepo = require('./tour.memory.repository');
const scheduleRepo = require('../schedules/schedule.memory.repository');

const getAll = () => tourRepo.getAll();
const getById = (id) => tourRepo.getById(id);
const createTour = ({ id, title, slug, description, isActive, createdAt, updatedAt }) =>
  tourRepo.createTour({ id, title, slug, description, isActive, createdAt, updatedAt });
const deleteById = (id) => tourRepo.deleteById(id);
const updateById = ({ id, title, slug, description, isActive, createdAt, updatedAt }) =>
  tourRepo.updateById({ id, title, slug, description, isActive, createdAt, updatedAt });
  const getSchedulesById = (id) => scheduleRepo.getSchedulesById(id);

module.exports = { getAll, getSchedulesById, getById, createTour, deleteById, updateById  };
