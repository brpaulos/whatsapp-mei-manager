'use strict';

const http_mocks = require('node-mocks-http');
const events = require('events');

global.buildResponse = (options) => {
  const mock = http_mocks.createResponse({ eventEmitter: events.EventEmitter });
  mock.getJson = function () {
    return JSON.parse(this._getData());
  }
  return Object.assign(mock, options);
}
