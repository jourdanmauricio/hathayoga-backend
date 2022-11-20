const express = require('express');
const passport = require('passport');

const { checkAdminRole } = require('./../middlewares/auth.handler');
const CommentService = require('../services/comment.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  getCommentSchema,
  createCommentSchema,
} = require('../schemas/comment.schema');

const router = express.Router();
const commentService = new CommentService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  async (req, res, next) => {
    try {
      const comments = await commentService.find();
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCommentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newComment = await commentService.create(body);
      res.status(201).json(newComment);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getCommentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await commentService.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
