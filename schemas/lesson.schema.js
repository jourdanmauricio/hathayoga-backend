const Joi = require('joi');

const id = Joi.number().positive();
const days = Joi.string().min(3).max(100);
const hours = Joi.string().min(3).max(100);
const studentQuantity = Joi.number().integer();

const getLessonSchema = Joi.object({
  id: id.required(),
});

const createLessonSchema = Joi.object({
  days: days.required(),
  hours: hours.required(),
  studentQuantity,
});

const updateLessonSchema = Joi.object({
  days,
  hours,
  studentQuantity,
});

module.exports = { getLessonSchema, createLessonSchema, updateLessonSchema };
