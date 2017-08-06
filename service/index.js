const linkAccountService = require('./linkAccount');
const importService = require('./import');
const coursesService = require('./courses');

module.exports = {
    linkAccount: linkAccountService,
    import: importService,
    courses: coursesService
};