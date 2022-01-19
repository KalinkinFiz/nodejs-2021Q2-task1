import * as tourRepo from './tour.memory.repository';
import * as scheduleRepo from '../schedules/schedule.memory.repository';
import { TTour } from './tour.types';

const getAll = () => tourRepo.getAll();
const getById = (id: string) => tourRepo.getById(id);
const createTour = ({ id, title, slug, description, isActive, createdAt, updatedAt }: TTour) =>
  tourRepo.createTour({ id, title, slug, description, isActive, createdAt, updatedAt });
const deleteById = (id: string) => tourRepo.deleteById(id);
const updateById = ({ id, title, slug, description, isActive, createdAt, updatedAt }: TTour) =>
  tourRepo.updateById({ id, title, slug, description, isActive, createdAt, updatedAt });
const getSchedulesById = (id: string) => scheduleRepo.getSchedulesById(id);

export { getAll, getSchedulesById, getById, createTour, deleteById, updateById };
