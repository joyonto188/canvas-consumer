const linkAccountService = require('./linkAccount');
const importService = require('./import');
const coursesService = require('./courses');
const canvasService = require('./canvas');

module.exports = {
    linkAccount: linkAccountService,
    import: importService,
    courses: coursesService,
    canvas: canvasService
};