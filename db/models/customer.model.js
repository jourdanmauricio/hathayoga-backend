const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
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
    allowNull: true,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  address: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  birthday: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  age: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  dni: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  certificate: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
  },
  status: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  start: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  comment: {
    allowNull: true,
    type: DataTypes.STRING,
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

class Customer extends Model {
  static associate(models) {
    // this.belongsTo(models.User, { as: 'user' });
    // this.hasMany(models.Order, {
    //    as: 'orders',
    //    foreignKey: 'customerId',
    //  });
    this.hasMany(models.CustomerHistory, {
      as: 'customersHistory',
      foreignKey: 'customerId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };
