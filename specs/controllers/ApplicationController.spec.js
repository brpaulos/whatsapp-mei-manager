const { ApplicationController } = require('../../app/controllers');

describe('ApplicationController', () => {
  describe('index', () => {
    it('should return 200 healthy', async () => {
      const request = {};
      const response = buildResponse();

      await ApplicationController.health(request, response);

      expect(response.statusCode).toEqual(200);
      expect(response._getData()).toEqual('I\'m healthy');
    });
  });
});
