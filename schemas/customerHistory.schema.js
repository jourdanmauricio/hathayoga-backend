const Joi = require('joi');

const id = Joi.number().integer();
const start = Joi.date();
const end = Joi.date().allow(null, '');
const customerId = Joi.number().integer();

const getCustomerHistorySchema = Joi.object({
  id: id.required(),
});

const createCustomerHistorySchema = Joi.object({
  start: start.required(),
  end: end.required(),
  customerId: customerId.required(),
});

const updateCustomerHistorySchema = Joi.object({
  start,
  end,
});

module.exports = {
  getCustomerHistorySchema,
  createCustomerHistorySchema,
  updateCustomerHistorySchema,
};
