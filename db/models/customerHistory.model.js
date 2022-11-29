const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model');

const CUSTOMER_HISTORY_TABLE = 'customers_history';

const CustomerHistorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  start: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },

  end: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
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
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    preferences: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class CustomerHistory extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });
    //   this.hasMany(models.Order, {
    //     as: 'orders',
    //     foreignKey: 'customerId',
    //   });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_HISTORY_TABLE,
      modelName: 'CustomerHistory',
      timestamps: false,
    };
  }
}

module.exports = {
  CustomerHistory,
  CustomerHistorySchema,
  CUSTOMER_HISTORY_TABLE,
};
