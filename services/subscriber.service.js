const { models } = require('../libs/sequelize');

class SubscriberService {
  constructor() {}

  async find() {
    const rta = await models.Subscriber.findAll();
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.Subscriber.findOne({
      where: { email },
    });
    return rta;
  }

  async create(data) {
    let rta;
    const suscriber = await this.findByEmail(data.email);
    if (suscriber) {
      data.status = 'Activo';
      data.reason = '';
      rta = await suscriber.update(data);
    } else {
      rta = await models.Subscriber.create(data);
    }
    return rta;
  }

  async update(data) {
    const suscriber = await this.findByEmail(data.email);
    data.status = 'Baja';
    const rta = await suscriber.update(data);
    return rta;
  }
}

module.exports = SubscriberService;
