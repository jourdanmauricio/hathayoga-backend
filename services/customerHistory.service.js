const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerHistoryService {
  constructor() {}

  async find() {
    const rta = await models.CustomerHistory.findAll();
    return rta;
  }

  async findOneByCustomer(id) {
    const customer = await models.CustomerHistory.findAll({
      where: { customer_id: id },
    });
    if (!customer) {
      throw boom.notFound('Cliente no encontrado');
    }
    return customer;
  }

  async findOne(id) {
    const customer = await models.CustomerHistory.findByPk(id);
    if (!customer) {
      throw boom.notFound('Cliente no encontrado');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = await models.CustomerHistory.create(data);
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { id };
  }
}

module.exports = CustomerHistoryService;
