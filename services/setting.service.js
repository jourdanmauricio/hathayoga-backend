const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SettingService {
  constructor() {}

  async create(data) {
    const newFeature = await models.Setting.create(data);
    return newFeature;
  }

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

  async findOneByFeature(feature) {
    const dataFeature = await models.Setting.findOne({ where: { feature } });

    if (!dataFeature) {
      throw boom.notFound('feature not found');
    }
    return dataFeature;
  }

  async updateAll(changes) {
    for (const fea in changes) {
      const feature = await this.findOneByFeature(fea);
      await feature.update({ value: changes[fea] });
    }
    const settings = await this.find();
    return settings;
  }
}

module.exports = SettingService;
