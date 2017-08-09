const linkAccountService = require('./linkAccount');
const importService = require('./import');
const coursesService = require('./courses');
const canvasService = require('./canvas');
const syncService = require('./sync');

module.exports = {
    linkAccount: linkAccountService,
    import: importService,
    courses: coursesService,
    canvas: canvasService,
    sync: syncService
};