const linkAccountApi = require('./linkAccount');
const importApi = require('./import');
const coursesApi = require('./courses');
const syncApi = require('./sync');

let init = (app) => {
    linkAccountApi.init(app);
    importApi.init(app);
    coursesApi.init(app);
    syncApi.init();
};

module.exports = {
    init: init
};