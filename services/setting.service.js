const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SettingService {
  constructor() {}

  async find() {
    const rta = await models.Setting.findAll();
    return rta;
  }

  async findOne(id) {
    const feature = await models.Setting.findByPk(id);
    if (!feature) {
      throw boom.notFound('feature not found');
    }
    return feature;
  }
  async update(id, changes) {
    const feature = await this.findOne(id);
    const rta = await feature.update(changes);
    return rta;
  }
}

module.exports = SettingService;
