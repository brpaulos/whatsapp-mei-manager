const { ActionsController } = require('../../app/controllers');
const { User } = require('../../app/models');
const faker = require('faker');

describe('ActionsController', () => {
  describe('#POST webhook', () => {
    it('should create an user', async () => {
      const phoneNumber = faker.phone.phoneNumber();
      const request = { body: {
        messages: [{
          id: 'false_5511988204774@c.us_92F58BF6553D93EC8BD08FEDA7BA8187',
          body: 'Hello World',
          fromMe: false,
          author: `${phoneNumber}@c.us`,
          time: 1535255580,
          chatId: `${phoneNumber}@c.us`,
          messageNumber: 6221,
          type: 'chat',
          senderName: 'John Doe'
        }],
        instanceId: '10009' }
      };
      const response = buildResponse();

      await ActionsController.webhook(request, response);
      const user = await User.findOne({ where: { phoneNumber: phoneNumber }});

      expect(response.statusCode).toEqual(200);
      expect(response.getJson()).toEqual({ data: { message: 'ok' }});
      expect(user).toBeDefined();
      expect(user.phoneNumber).toEqual(phoneNumber);
      expect(user.action).toEqual('fill_name');
    });
  });
});
