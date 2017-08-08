const databaseConfig = require('./database');
const message = require('./message');
const settings = require('./settings');

module.exports = {
    settings: settings,
    databaseSettings: databaseConfig,
    message: message
};