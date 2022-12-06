const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { config } = require('../config/config');
const { transporter } = require('../config/mailer');

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

    // Send email
    await transporter.sendMail({
      from: `"Formulario de Contacto 👻" <${config.emailSend}>`, // sender address
      // to: 'bar@example.com, baz@example.com', // list of receivers
      to: config.emailTo, // list of receivers
      subject: 'Nuevo Suscriptor en Hatha Yoga ✔', // Subject line
      // text: 'Hello world?', // plain text body
      html: `
      <h2 style='text-align: center;'>Tienes un nuevo mensaje de contacto!</h2>
      <div style='border: 1px solid #5a5959; padding: 10px; border-radius: 0.25rem; display: inline-block; max-width: 80%; margin: 0 auto;'>
      <div style='display: grid; grid-template-columns: 100px 1 fr;'>
      <p>Nombre: ${rta.name}</p>
      <hr>
      <p>Teléfono: ${rta.phone}</p>
      <p>Email: ${rta.email}</p>
      <p>Comentario: ${rta.comment}</p>
      </div>
      </div>
      `,
    });

    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { id };
  }
}

module.exports = CommentService;
