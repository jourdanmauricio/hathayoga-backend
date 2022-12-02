const express = require('express');
const passport = require('passport');
const { checkAdminRole } = require('./../middlewares/auth.handler');
const SettingService = require('./../services/setting.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { config } = require('./../config/config');

const {
  updateSettingSchema,
  createSettingSchema,
  // getSettingSchema,
} = require('./../schemas/setting.schema');

const router = express.Router();
const service = new SettingService();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname, +'-' + Date.now());
    // cb(null, `${Date.now()}-${file.originalname}`);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get(
  '/',
  // passport.authenticate('jwt', { session: false }),
  // checkAdminRole,
  async (req, res, next) => {
    try {
      const settings = await service.find();
      res.json(settings);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(createSettingSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/upload-file',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  upload.single('image'),
  async (req, res, next) => {
    try {
      const file = config.domain + 'static/images/' + req.file.originalname;

      res.status(201).json({ image: file });
      // res.status(201).json({ image: filePath });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(updateSettingSchema, 'body'),
  async (req, res, next) => {
    try {
      const { data } = req.body;
      const setting = await service.updateAll(data);
      res.json(setting);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
