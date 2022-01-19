const Schedule = require('./schedule.model');

const Schedules = [new Schedule()];

const getAll = async () => Schedules;

const getById = async (id) => Schedules.find((schedule) => schedule.id === id);

const getSchedulesById = async (id) => {
  const schedules = [];
  Schedules.forEach((schedule) => {
    if (schedule.tourId === id) schedules.push(schedule);
  });
  return schedules;
};

const createSchedule = async ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }) => {
  const schedule = new Schedule({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt });
  Schedules.push(schedule);
  return schedule;
};

const deleteById = async (id) => {
  const schedulePosition = Schedules.findIndex((schedule) => schedule.id === id);

  if (schedulePosition === -1) return null;

  const scheduleDeletable = Schedules[schedulePosition];

  Schedules.splice(schedulePosition, 1);
  return scheduleDeletable;
};

const updateById = async ({ id, tourId, isActive, startDate, endDate, createdAt, updatedAt }) => {
  const schedulePosition = Schedules.findIndex((schedule) => schedule.id === id);

  if (schedulePosition === -1) return null;

  const oldSchedule = Schedules[schedulePosition];
  const newSchedule = { ...oldSchedule, tourId, isActive, startDate, endDate, createdAt, updatedAt };

  Schedules.splice(schedulePosition, 1, newSchedule);
  return newSchedule;
};

module.exports = {
  Schedules,
  getAll,
  getById,
  getSchedulesById,
  createSchedule,
  deleteById,
  updateById,
};
