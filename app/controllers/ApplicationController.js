const { User, Sequelize } = require('../models');

const ApplicationController = {
  forceSSL: (req, res, next) => {
   if (req.headers['x-forwarded-proto'] !== 'https') {
       return res.redirect(['https://', req.get('Host'), req.url].join(''));
   }
   return next();
  },
  health: (req, res) => {
    return res.status(200).send('I\'m healthy');
  },
  engage: async (req, res) => {
    const users = await User.findAll({ where: { name: { [Sequelize.Op.ne]: null }}});

    await users.forEach(async (user) => {
      await user.sendMessage(`${user.name}, não esqueci de você hein!\nMe manda o valor das compras que você realizou hoje :)`)
    });
    return res.status(200).json({ data: { message: 'ok' }});
  },
  bills: async (req, res) => {
    const users = await User.findAll({ where: { name: { [Sequelize.Op.ne]: null }}});

    await users.forEach(async (user) => {
      await user.sendMessage(`${user.name}, hoje vence a conta de luz, não esquece de pagar`);
    });
    return res.status(200).json({ data: { message: 'ok' }});
  },
  bye: async (req, res) => {
    const users = await User.findAll({ where: { name: { [Sequelize.Op.ne]: null }}});

    await users.forEach(async (user) => {
      await user.sendMessage('Obrigada e até a próxima, empreendedores! 😉');
    });
    return res.status(200).json({ data: { message: 'ok' }});
  }
};

module.exports = ApplicationController;
