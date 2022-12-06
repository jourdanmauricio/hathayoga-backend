const express = require('express');

const SubscriberService = require('../services/subscriber.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createSubscriberSchema,
  updateSubscriberSchema,
  getSubscriberSchema,
} = require('../schemas/subscriber.schema');

const router = express.Router();
const subscriberService = new SubscriberService();

router.get('/', async (req, res, next) => {
  try {
    const subscribers = await subscriberService.find();
    res.status(200).json(subscribers);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createSubscriberSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newSubscriber = await subscriberService.create(body);
    res.status(201).json(newSubscriber);
  }
);

router.put(
  '/',
  validatorHandler(updateSubscriberSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;

      const lesson = await subscriberService.update(body);
      res.status(200).json(lesson);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getSubscriberSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await subscriberService.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
