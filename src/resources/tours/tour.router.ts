import { Router, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { Tour } from './tour.model';
import { Schedule } from '../schedules/schedule.model';
import * as toursService from './tour.service';

import catchErrors from '../../common/catchErrors';

const router = Router();

// вернет все туры в системе
router.route('/').get(
  catchErrors(async (_req: Request, res: Response) => {
    const tours = await toursService.getAll();

    res.json(tours.map(Tour.toResponse));
  }),
);

//  вернет тур с заданным :tourId
router.route('/:id').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const tour = await toursService.getById(id || '');

    if (tour) {
      res.json(Tour.toResponse(tour));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

//  вернет все расписания связанные с туром :tourId
router.route('/:id/schedules').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const schedules = await toursService.getSchedulesById(id || '');

    if (schedules) {
      res.json(Schedule.toResponse(schedules));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

//  создаст тур
router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    const { id, title, slug, description, isActive, createdAt, updatedAt } = req.body;

    const tour = await toursService.createTour({ id: id || '', title, slug, description, isActive, createdAt, updatedAt });

    if (tour) {
      res.status(StatusCodes.CREATED).json(Tour.toResponse(tour));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

  //  обновит тур с заданным :tourId
router.route('/:id').put(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, slug, description, isActive, createdAt, updatedAt } = req.body;

    const tour = await toursService.updateById({ id: id || '', title, slug, description, isActive, createdAt, updatedAt });

    if (tour) {
      res.status(StatusCodes.OK).json(Tour.toResponse(tour));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const tour = await toursService.deleteById(id || '');

    if (tour) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'TOUR_DELETED', msg: 'Tour has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

export default router;
