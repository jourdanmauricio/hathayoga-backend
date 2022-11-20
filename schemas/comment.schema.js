const Joi = require('joi');

const id = Joi.number().positive();
const name = Joi.string().max(100);
const email = Joi.string().email();
const phone = Joi.string().max(100).allow(null, '');
const comment = Joi.string().max(250);

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
