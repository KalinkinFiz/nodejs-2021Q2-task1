import { Router, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { Schedule } from './schedule.model';
import { Price } from '../prices/price.model';
import * as schedulesService from './schedule.service';

import catchErrors from '../../common/catchErrors';

const router = Router();

// вернет все расписания в системе
router.route('/').get(
  catchErrors(async (_req: Request, res: Response) => {
    const schedules = await schedulesService.getAll();

    res.json(schedules.map(Schedule.toResponse));
  }),
);

// вернет расписание с заданным :scheduleId
router.route('/:id').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const schedule = await schedulesService.getById(id || '');

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
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const prices = await schedulesService.getPricesById(id || '');

    if (prices) {
      res.json(Price.toResponse(prices));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'PRICES_NOT_FOUND', msg: 'Prices not found' });
    }
  }),
);

router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    const { id, tourId, isActive, startDate, endDate, createdAt, updatedAt } = req.body;

    const schedule: Schedule = await schedulesService.createSchedule({
      id,
      tourId,
      isActive,
      startDate,
      endDate,
      createdAt,
      updatedAt,
    });

    if (schedule) {
      res.status(StatusCodes.CREATED).json(Schedule.toResponse(schedule));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { tourId, isActive, startDate, endDate, createdAt, updatedAt } = req.body;

    const schedule = await schedulesService.updateById({
      id: id || '',
      tourId,
      isActive,
      startDate,
      endDate,
      createdAt,
      updatedAt,
    });

    if (schedule) {
      res.status(StatusCodes.OK).json(Schedule.toResponse(schedule));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'SCHEDULE_NOT_FOUND', msg: 'Schedule not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const schedule = await schedulesService.deleteById(id || '');

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

export default router;
