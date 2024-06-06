require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME_DEV,
    password: process.env.PASSWORD_DEV,
    database: process.env.DATABASE_DEV,
    host: process.env.HOST_DEV,
    dialect: process.env.DIALECT,
  },
  test: {
    username: process.env.USERNAME_DEV,
    password: process.env.PASSWORD_DEV,
    database: process.env.DATABASE_DEV,
    host: process.env.HOST_DEV,
    dialect: process.env.DIALECT,
  },
  production: {
    username: process.env.USERNAME_PROD,
    password: process.env.PASSWORD_PROD,
    database: process.env.DATABASE_PROD,
    host: process.env.HOST_PROD,
    dialect: process.env.DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
};
