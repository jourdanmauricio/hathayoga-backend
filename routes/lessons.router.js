const express = require('express');
const passport = require('passport');

const { checkAdminRole } = require('./../middlewares/auth.handler');
const LessonsService = require('../services/lessons.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getLessonSchema,
  createLessonSchema,
  updateLessonSchema,
} = require('../schemas/lesson.schema');

const router = express.Router();
const lessonsService = new LessonsService();

router.get('/', async (req, res, next) => {
  try {
    const lessons = await lessonsService.find();
    res.status(200).json(lessons);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getLessonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const lesson = await lessonsService.findOne(id);
      res.status(200).json(lesson);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id/users',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  async (req, res) => {
    const { id } = req.params;
    if (id === '999') {
      res.status(404).json({ message: 'Not found' });
    } else {
      res.status(200).json([
        { classId: 1, days: 'Lunes, Miercoles, Viernes', hours: '14 a 15 hs' },
        { classId: 1, days: 'Lunes, Miercoles, Viernes', hours: '17 a 18 hs' },
      ]);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(createLessonSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newLesson = await lessonsService.create(body);
    res.status(201).json(newLesson);
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getLessonSchema, 'params'),
  validatorHandler(updateLessonSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const lesson = await lessonsService.update(id, body);
      res.status(200).json(lesson);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getLessonSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const rta = await lessonsService.delete(id);
    res.status(200).json(rta);
  }
);

module.exports = router;
