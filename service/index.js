const linkAccountService = require('./linkAccount');
const importService = require('./import');
const coursesService = require('./courses');
const syncService = require('./sync');

module.exports = {
    linkAccount: linkAccountService,
    import: importService,
    courses: coursesService,
    sync: syncService
};