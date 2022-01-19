import { TSchedule } from './schedule.types';
import { Schedule } from './schedule.model';

const Schedules = [new Schedule()];

const getAll = async () => Schedules;

const getById = async (id: string) => Schedules.find((schedule) => schedule.id === id);

const getSchedulesById = async (id: string | undefined) => {
  const schedulePosition = Schedules.findIndex((schedule) => schedule.tourId === id);
  if (schedulePosition === -1) return null;
  const prices = Schedules[schedulePosition];
  return prices;
};

const createSchedule = async ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }: TSchedule) => {
  const schedule = new Schedule({
    id,
    tourId,
    isActive,
    startDate,
    endDate,
    createdAt,
    updatedAt,
  });
  Schedules.push(schedule);
  return schedule;
};


const deleteById = async (id: String) => {
  const schedulePosition: number = Schedules.findIndex((schedule) => schedule.id === id);

  if (schedulePosition === -1) return null;

  const scheduleDeletable = Schedules[schedulePosition];

  Schedules.splice(schedulePosition, 1);
  return scheduleDeletable;
};

const updateById = async ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }: TSchedule) => {
  const schedulePosition = Schedules.findIndex((schedule) => schedule.id === id);

  if (schedulePosition === -1) return null;

  const oldSchedule = Schedules[schedulePosition];
  const newSchedule = { ...oldSchedule, id, tourId, isActive, startDate, endDate, createdAt, updatedAt };

  Schedules.splice(schedulePosition, 1, newSchedule);
  return newSchedule;
};

export { Schedules, getAll, getById, getSchedulesById, createSchedule, deleteById, updateById };
