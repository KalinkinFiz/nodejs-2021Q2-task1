const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Price = require('./price.model');
const pricesService = require('./price.service');

const catchErrors = require('../../common/catchErrors');

// получить все цены в системе
router.route('/').get(
  catchErrors(async (req, res) => {
    const prices = await pricesService.getAll();

    res.json(prices.map(Price.toResponse));
  }),
);

// вернет цену с заданным :priceId
router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const price = await pricesService.getById(id);

    if (price) {
      res.json(Price.toResponse(price));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'PRICE_NOT_FOUND', msg: 'Price not found' });
    }
  }),
);

//создаст цену и привяжет ее к существующему расписанию &7&&7&7&&&77&&7&&7
router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, priceValue, priceCurrency, createdAt, updatedAt } = req.body;

    const price = await pricesService.createPrice({ id, priceValue, priceCurrency, createdAt, updatedAt }); // а тут то написано в {}?

    if (price) {
      res.status(StatusCodes.CREATED).json(Price.toResponse(dish));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { priceValue, priceCurrency, createdAt, updatedAt } = req.body;

    const price = await pricesService.updateById({ id, priceValue, priceCurrency, createdAt, updatedAt });

    if (price) {
      res.status(StatusCodes.OK).json(Price.toResponse(price));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'PRICE_NOT_FOUND', msg: 'Price not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const price = await pricesService.deleteById(id);

    if (price) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'PRICE_DELETED', msg: 'Price has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'PRICE_NOT_FOUND', msg: 'Price not found' });
    }
  }),
);

module.exports = router;
