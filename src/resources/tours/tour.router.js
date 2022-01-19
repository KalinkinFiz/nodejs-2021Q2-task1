const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Tour = require('./tour.model');
const toursService = require('./tour.service');
const catchErrors = require('../../common/catchErrors');

// Вренет все туры
router.route('/').get(
  catchErrors(async (req, res) => {
    const toure = await toursService.getAll();

    res.json(tours.map(Tour.toResponse));
  }),
);

// Вернет тур с заданным id
router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const tour = await toursService.getById(id);

    if (tour) {
      res.json(Tour.toResponse(tour));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

// Вернет все расписания связанные с туром по id
router.route('/:id/schedules').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const tours = await toursService.getSchedulesById(id);

    if (tours.length > 0) {
      res.json(tours.map(Tour.toResponse));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

//создаст тур
router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, title, slug, description, isActive, createdAt, updatedAt } = req.body;

    const tour = await toursService.createTour({ id, title, slug, description, isActive, createdAt, updatedAt });

    if (tour) {
      res.status(StatusCodes.CREATED).json(Tour.toResponse(tour));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

//обновит тур с заданным :tourId
router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, slug, description, isActive, createdAt, updatedAt } = req.body;

    const tour = await toursService.updateById({ id, title, slug, description, isActive, createdAt, updatedAt });

    if (tour) {
      res.status(StatusCodes.OK).json(Tour.toResponse(tour));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

//удалит тур с заданным :tourId
router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const tour = await toursService.deleteById(id);

    if (tour) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'TOUR_DELETED', msg: 'Tour has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'TOUR_NOT_FOUND', msg: 'Tour not found' });
    }
  }),
);

module.exports = router;
