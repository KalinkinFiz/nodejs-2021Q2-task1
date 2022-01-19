const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Schedule = require('./schedule.model');
const schedulesService = require('./schedule.service');

const catchErrors = require('../../common/catchErrors');

// вернет все расписания в системе
router.route('/').get(
  catchErrors(async (req, res) => {
    const schedules = await schedulesService.getAll();

    res.json(schedules.map(Schedule.toResponse));
  }),
);

// вернет расписание с заданным :scheduleId
router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const schedule = await schedulesService.getById(id);

    if (schedule) {
      res.json(Schedule.toResponse(schedule));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'SCHEDULE_NOT_FOUND', msg: 'Schedule not found' });
    }
  }),
);

// вернет все цены связанные с расписанием с заданным :scheduleId
router.route('/:id/schedules').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const schedules = await schedulesService.getPricesById(id);

    if (schedules.length > 0) {
      res.json(schedules.map(Schedule.toResponse));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'SCHEDULE_NOT_FOUND', msg: 'Schedule not found' });
    }
  }),
);

// создаст расписание и привяжет его к существующему туру
router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, isActive, startDate, endDate, createdAt, updatedAt } = req.body;

    const schedule = await schedulesService.createSchedule({ id, isActive, startDate, endDate, createdAt, updatedAt });

    if (schedule) {
      res.status(StatusCodes.CREATED).json(Schedule.toResponse(schedule));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);


// обновит тур с заданным :tourId
router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { isActive, startDate, endDate, createdAt, updatedAt } = req.body;

    const schedule = await schedulesService.updateById({ id, isActive, startDate, endDate, createdAt, updatedAt });

    if (schedule) {
      res.status(StatusCodes.OK).json(Schedule.toResponse(schedule));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'SCHEDULE_NOT_FOUND', msg: 'Schedule not found' });
    }
  }),
);


//удалит тур с заданным :tourId
router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const schedule = await schedulesService.deleteById(id);

    if (schedule) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'SCHEDULE_DELETED', msg: 'Schedule has been deleted' });
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'SCHEDULE_NOT_FOUND', msg: 'Schedule not found' });
    }
  }),
);

module.exports = router;
