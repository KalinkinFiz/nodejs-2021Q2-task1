import * as scheduleRepo from './schedule.memory.repository';
import * as priceRepo from '../prices/price.memory.repository';
import { TSchedule } from './schedule.types';

const getAll = () => scheduleRepo.getAll();
const getById = (id: string) => scheduleRepo.getById(id);
const createSchedule = ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }: TSchedule) =>
scheduleRepo.createSchedule({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt });
const deleteById = (id: string) => scheduleRepo.deleteById(id);
const updateById = ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }: TSchedule) =>
scheduleRepo.updateById({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt });
const getPricesById = (id: string) => priceRepo.getPricesById(id);

export { getAll, getById, getPricesById, createSchedule, deleteById, updateById };
