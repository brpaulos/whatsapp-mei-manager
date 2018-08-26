'use strict';

const actions = require('./actions');
const keys = Object.keys(actions);

const ActionDispatcher = {
  dispatch: async (action) => {
    if (keys.includes(action.type)) return await actions[action.type](action);
    return await actions['default_action'](action);
  }
};

module.exports = ActionDispatcher;
