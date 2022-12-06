const express = require('express');
const passport = require('passport');

const { checkAdminRole } = require('../middlewares/auth.handler');
const CustomerHistoryService = require('../services/customerHistory.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  getCustomerHistorySchema,
  createCustomerHistorySchema,
  updateCustomerHistorySchema,
} = require('../schemas/customerHistory.schema');

const router = express.Router();
const service = new CustomerHistoryService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  async (req, res, next) => {
    try {
      const history = await service.find();
      res.status(200).json(history);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getCustomerHistorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOneByCustomer(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(createCustomerHistorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newHistory = await service.create(body);
      res.status(201).json(newHistory);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getCustomerHistorySchema, 'params'),
  validatorHandler(updateCustomerHistorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.status(200).json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getCustomerHistorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
