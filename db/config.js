// const { config } = require('./../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  // development: {
  //   url: URI,
  //   dialect: 'postgres',
  // },
  // production: {
  //   url: URI,
  //   dialect: 'postgres',
  // },

  development: {
    // url: URI,
    storage: './db/hathayoga.sqlite',
    dialect: 'sqlite',
  },
  production: {
    // url: URI,
    storage: './db/hathayoga.sqlite',
    dialect: 'sqlite',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
