const Joi = require('joi');

const id = Joi.number().integer();
const type = Joi.string();
const feature = Joi.string();
const value = Joi.string();
const comment = Joi.string();

const createSettingSchema = Joi.object({
  type: type.required(),
  feature: feature.required(),
  value: value.required(),
  comment,
});

const updateSettingSchema = Joi.object({
  type,
  feature,
  value,
  comment,
});

const getSettingSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSettingSchema, updateSettingSchema, getSettingSchema };
