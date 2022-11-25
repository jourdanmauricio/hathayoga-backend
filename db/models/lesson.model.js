const { Model, DataTypes, Sequelize } = require('sequelize');

const LESSON_TABLE = 'lessons';

const LessonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  days: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  hours: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  studentQuantity: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'student_quantity',
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

class Lesson extends Model {
  // static associate(models) {
  //   this.hasOne(models.Customer, {
  //     as: 'customer',
  //     foreignKey: 'userId',
  //   });
  // }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LESSON_TABLE,
      modelName: 'Lesson',
      timestamps: false,
    };
  }
}

module.exports = { LESSON_TABLE, LessonSchema, Lesson };
