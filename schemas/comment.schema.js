const Joi = require('joi');

const id = Joi.number().positive();
const name = Joi.string().min(3).max(100);
const email = Joi.string().email();
const phone = Joi.string().min(3).max(100);
const comment = Joi.string().min(3).max(250);

const getCommentSchema = Joi.object({
  id: id.required(),
});

const createCommentSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  phone,
  comment: comment.required(),
});

module.exports = {
  getCommentSchema,
  createCommentSchema,
};
