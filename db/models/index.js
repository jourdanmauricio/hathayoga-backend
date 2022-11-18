const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Lesson, LessonSchema } = require('./lesson.model');
const { Subscriber, SubscriberSchema } = require('./subscriber.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Lesson.init(LessonSchema, Lesson.config(sequelize));
  Subscriber.init(SubscriberSchema, Subscriber.config(sequelize));
}

module.exports = setupModels;
