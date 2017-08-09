const linkAccountApi = require('./linkAccount');
const importApi = require('./import');
const coursesApi = require('./courses');

let init = (app) => {
    linkAccountApi.init(app);
    importApi.init(app);
    coursesApi.init(app);
};

module.exports = {
    init: init
};