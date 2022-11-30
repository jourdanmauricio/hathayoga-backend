const express = require('express');
const passport = require('passport');

const { checkAdminRole } = require('./../middlewares/auth.handler');
const SettingService = require('./../services/setting.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  updateSettingSchema,
  // createSettingSchema,
  getSettingSchema,
} = require('./../schemas/setting.schema');

const router = express.Router();
const service = new SettingService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  async (req, res, next) => {
    try {
      const settings = await service.find();
      res.json(settings);
    } catch (error) {
      next(error);
    }
  }
);

// router.get(
//   '/:id',
//   passport.authenticate('jwt', { session: false }),
//   checkAdminRole,
//   validatorHandler(getUserSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const category = await service.findOne(id);
//       res.json(category);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.post(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   checkAdminRole,
//   validatorHandler(createUserSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newCategory = await service.create(body);
//       res.status(201).json(newCategory);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getSettingSchema, 'params'),
  validatorHandler(updateSettingSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const setting = await service.update(id, body);
      res.json(setting);
    } catch (error) {
      next(error);
    }
  }
);

// router.delete(
//   '/:id',
//   passport.authenticate('jwt', { session: false }),
//   checkAdminRole,
//   validatorHandler(getUserSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       await service.delete(id);
//       res.status(201).json({ id });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
