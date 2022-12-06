const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(255);
const email = Joi.string().email().allow(null, '');
const phone = Joi.string().allow(null, '');
const address = Joi.string().allow(null, '');
const birthday = Joi.date().allow(null, '');
const age = Joi.number().positive().allow(null, '');
const dni = Joi.string().max(20);
const certificate = Joi.boolean().allow(null, '');
const status = Joi.string().allow(null, '');
const start = Joi.date().allow(null, '');
// const end = Joi.date().allow(null, '');
const comment = Joi.string().max(255).allow(null, '');

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  email,
  phone,
  address,
  birthday,
  age,
  dni,
  status,
  certificate,
  start,
  comment,
});

const updateCustomerSchema = Joi.object({
  name,
  email,
  phone,
  address,
  birthday,
  age,
  dni,
  status,
  certificate,
  start,
  // end,
  comment,
});

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
};
