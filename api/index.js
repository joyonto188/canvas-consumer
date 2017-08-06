const helper = require('../helper');
const responseHelper = helper.response;

module.exports = {
    linkAccount: (request, response) => {
        responseHelper.success(response, 'link-account is under development');
    },

    import: (request, response) => {
        responseHelper.success(response, 'import is under development');
    },

    courses: (request, response) => {
        responseHelper.success(response, 'courses is under development');
    }
};