'use strict';
const { DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./../models/customer.model');

const { CUSTOMER_HISTORY_TABLE } = require('./../models/customerHistory.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CUSTOMER_HISTORY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      start: {
        allowNull: false,
        type: DataTypes.DATE,
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMER_HISTORY_TABLE);
  },
};
