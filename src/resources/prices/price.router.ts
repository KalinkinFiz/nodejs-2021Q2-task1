import { Router, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { Price } from './price.model';
import * as pricesService from './price.service';

import catchErrors from '../../common/catchErrors';

const router = Router();

// получить все цены в системе
router.route('/').get(
  catchErrors(async (_req: Request, res: Response) => {
    const prices = await pricesService.getAll();

    res.json(prices.map(Price.toResponse));
  }),
);

// вернет цену с заданным :priceId
router.route('/:id').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const price = await pricesService.getById(id || '');

    if (price) {
      res.json(Price.toResponse(price));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'PRICE_NOT_FOUND', msg: 'Price not found' });
    }
  }),
);

router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    // const { id } = req.params;
    const { id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt } = req.body;
    const price: Price = await pricesService.createPrice({
      id, 
      scheduleId, 
      priceValue, 
      priceCurrency, 
      createdAt, 
      updatedAt,
    });

    if (price) {
      res.status(StatusCodes.CREATED).json(Price.toResponse(price));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { scheduleId, priceValue, priceCurrency, createdAt, updatedAt } = req.body;

    const price = await pricesService.updateById({
      id: id || '',
      scheduleId, 
      priceValue, 
      priceCurrency, 
      createdAt, 
      updatedAt,
    });

    if (price) {
      res.status(StatusCodes.OK).json(Price.toResponse(price));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'PRICE_NOT_FOUND', msg: 'Price not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const price = await pricesService.deleteById(id || '');

    if (price) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'PRICE_DELETED', msg: 'Price has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'PRICE_NOT_FOUND', msg: 'Price not found' });
    }
  }),
);

export default router;
