const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class LessonsService {
  constructor() {
    this.lessons = [
      { id: 1, days: 'Lunes, Miercoles, Viernes', hours: '14 a 15 hs' },
      { id: 2, days: 'Lunes, Miercoles, Viernes', hours: '17 a 18 hs' },
    ];
  }

  async create(data) {
    const newLesson = await models.Lesson.create(data);
    return newLesson;
  }

  async find() {
    const rta = await models.Lesson.findAll();
    return rta;
  }

  async findOne(id) {
    const lesson = await models.Lesson.findByPk(id);
    if (!lesson) {
      throw boom.notFound('Clase no encontrada');
    }
    return lesson;
  }

  async update(id, changes) {
    const lesson = await this.findOne(id);
    const rta = await lesson.update(changes);
    return rta;
  }

  async delete(id) {
    const lesson = await this.findOne(id);
    await lesson.destroy();
    return { id };
  }
}

module.exports = LessonsService;
