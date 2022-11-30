const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const {
  CustomerHistory,
  CustomerHistorySchema,
} = require('./customerHistory.model');
const { Lesson, LessonSchema } = require('./lesson.model');
const { Subscriber, SubscriberSchema } = require('./subscriber.model');
const { Comment, CommentSchema } = require('./comment.model');
const { Setting, SettingSchema } = require('./setting.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  CustomerHistory.init(
    CustomerHistorySchema,
    CustomerHistory.config(sequelize)
  );
  Lesson.init(LessonSchema, Lesson.config(sequelize));
  Subscriber.init(SubscriberSchema, Subscriber.config(sequelize));
  Comment.init(CommentSchema, Comment.config(sequelize));
  Setting.init(SettingSchema, Setting.config(sequelize));

  Customer.associate(sequelize.models);
  CustomerHistory.associate(sequelize.models);
}

module.exports = setupModels;
