const Joi = require('joi');

const id = Joi.number().integer();
const type = Joi.string();
const feature = Joi.string();
const value = Joi.string().allow('');
const comment = Joi.string();
const data = Joi.object();

const createSettingSchema = Joi.object({
  type: type.required(),
  feature: feature.required(),
  value,
  comment,
});

const updateSettingSchema = Joi.object({
  type,
  feature,
  value,
  comment,
  data,
});

const getSettingSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSettingSchema, updateSettingSchema, getSettingSchema };
