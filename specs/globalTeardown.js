'use strict';

module.exports = async () => {
  const { sequelize } = require('../app/models');
  await sequelize.close();
}
