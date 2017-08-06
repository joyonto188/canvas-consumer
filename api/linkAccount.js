const helper = require('../helper');
const responseHelper = helper.response;

let init = (app) => {
    app.post('/link-account', linkAccount);
};

let linkAccount = (request, response) => {
    responseHelper.success(response, 'link-account is under development');
};

module.exports = {
    init: init
};