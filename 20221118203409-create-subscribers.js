'use strict';
const { DataTypes, Sequelize } = require('sequelize');
const { SUBSCRIBER_TABLE } = require('./../models/subscriber.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(SUBSCRIBER_TABLE, {
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable(SUBSCRIBER_TABLE);
  },
};
