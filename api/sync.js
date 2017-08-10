const settingsConfig = require('../config').settings;
const service = require('../service');
const syncService = service.sync;

let init = () => {
    setInterval(syncService.sync, settingsConfig.syncTime);
};

module.exports = {
    init: init
};