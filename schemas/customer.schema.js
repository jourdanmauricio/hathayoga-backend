const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(255);
const email = Joi.string().email();
const phone = Joi.string();
const address = Joi.string();
const birthday = Joi.date();
const age = Joi.number().positive();
const dni = Joi.string().max(20);
const certificate = Joi.boolean();
const status = Joi.string();
const start = Joi.date();
const end = Joi.date();
const comment = Joi.string().max(255);

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
  // start,
  // end,
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
  end,
  comment,
});

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
};
