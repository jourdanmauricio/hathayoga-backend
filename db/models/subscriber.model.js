const { Model, DataTypes, Sequelize } = require('sequelize');

const SUBSCRIBER_TABLE = 'subscribers';

const SubscriberSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  reason: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

class Subscriber extends Model {
  // static associate(models) {
  //   this.belongsTo(models.User, { as: 'user' });
  //   this.hasMany(models.Order, {
  //     as: 'orders',
  //     foreignKey: 'customerId',
  //   });
  // }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUBSCRIBER_TABLE,
      modelName: 'Subscriber',
      timestamps: false,
    };
  }
}

module.exports = { Subscriber, SubscriberSchema, SUBSCRIBER_TABLE };
