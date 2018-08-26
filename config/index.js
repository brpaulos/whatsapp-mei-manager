'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const config = {
  development: {
    PORT: 3000,
    DATABASE_URL: "postgres://postgres:@localhost:5432/database_api_development",
    WHATSAPP: {
      TOKEN: 'eqp5bwzlva3gf1c0'
    }
  },
  test: {
    PORT: 3000,
    DATABASE_URL: "postgres://postgres:@localhost:5432/database_api_test",
    WHATSAPP: {
      TOKEN: 'eqp5bwzlva3gf1c0'
    }
  },
  production: {
    PORT: process.env.PORT,
    DATABASE_URL: `${process.env.DATABASE_URL}?ssl=true`,
    WHATSAPP: {
      TOKEN: process.env.WHATSAPP_TOKEN
    }
  }
};

module.exports = Object.assign(config[process.env.NODE_ENV], { environment: process.env.NODE_ENV });
