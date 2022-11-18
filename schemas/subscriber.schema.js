const Joi = require('joi');

const id = Joi.number().positive();
const name = Joi.string().min(3).max(100);
const email = Joi.string().email();
const status = Joi.string().min(3).max(10);
const reason = Joi.string().min(3).max(100);

const getSubscriberSchema = Joi.object({
  id: id.required(),
});

const createSubscriberSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  status,
});

const updateSubscriberSchema = Joi.object({
  name,
  email,
  status,
  reason,
});

module.exports = {
  getSubscriberSchema,
  createSubscriberSchema,
  updateSubscriberSchema,
};
