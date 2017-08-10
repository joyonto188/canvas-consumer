const databaseConfig = require('./database');
const message = require('./message');
const settings = require('./settings');

module.exports = {
    databaseSettings: databaseConfig,
    message: message,
    settings: settings
};