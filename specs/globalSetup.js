'use strict';

module.exports = async () => {
  const models = require('../app/models');
  Object.keys(models.sequelize.models).forEach(async (model) => {
    await models[model].destroy({ truncate: true });
  });
}
