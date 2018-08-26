const { ActionDispatcher } = require('../dispatchers');
const { User, Sequelize } = require('../models');

const ActionsController = {
  webhook: async (req, res) => {
    console.log(req.body);
    if (!req.body || !req.body.messages || !req.body.messages.length) {
      return res.status(422).json({ data: { message: 'could not proccess message.' }});
    }
    const phoneNumber = req.body.messages[0].author.split('@')[0];
    if (phoneNumber == '5513991709037') return res.status(422).json({ error: 'could not proccess' });
    console.log('phoneNumber', phoneNumber);
    let user = await User.findOne({ where: { phoneNumber: phoneNumber }});
    if (!user) user = await User.createFromRequest(req.body);

    await ActionDispatcher.dispatch({
      type: user.action,
      user: user,
      message: req.body.messages[0].body
    });

    return res.status(200).json({ data: { message: 'ok' }});
  }
}

module.exports = ActionsController;
