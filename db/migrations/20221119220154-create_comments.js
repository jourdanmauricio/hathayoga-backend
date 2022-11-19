'use strict';
const { DataTypes, Sequelize } = require('sequelize');
const { COMMENT_TABLE } = require('./../models/comment.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(COMMENT_TABLE, {
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
      phone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      comment: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: false,
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
    await queryInterface.dropTable(COMMENT_TABLE);
  },
};
