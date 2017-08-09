const linkAccountService = require('./linkAccount');
const importService = require('./import');
const canvasService = require('./canvas');

module.exports = {
    linkAccount: linkAccountService,
    import: importService,
    canvas: canvasService
};