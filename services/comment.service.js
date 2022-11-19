const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CommentService {
  constructor() {}

  async find() {
    const rta = await models.Comment.findAll();
    return rta;
  }

  async findOne(id) {
    const comment = await models.Comment.findByPk(id);
    if (!comment) {
      throw boom.notFound('Comentario no encontrado');
    }
    return comment;
  }

  async create(data) {
    const rta = await models.Comment.create(data);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { id };
  }
}

module.exports = CommentService;
