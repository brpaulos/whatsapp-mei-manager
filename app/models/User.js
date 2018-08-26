'use strict';

const config = require('../../config');
const request = require('request-promise');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name:        DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    cnpj:        DataTypes.STRING,
    action:      DataTypes.STRING,
    history:     DataTypes.JSONB
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'users'
  });

  User.prototype.sendMessage = async function (message, delay) {
    delay = delay || 0;
    const phoneNumber = this.phoneNumber;

    setTimeout(async () => {
      await request.post({
        url: `https://eu8.chat-api.com/instance10009/message?token=${config.WHATSAPP.TOKEN}`,
        json: true,
        form: {
          phone: phoneNumber,
          body: message
        }
      });
    }, delay);
  }

  User.createFromRequest = async function (body) {
    const user = await User.create({
      phoneNumber: body.messages[0].author.split('@')[0],
      action:      'onboarding'
    });
    return user;
  }

  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};
