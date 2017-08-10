const config = require('../config');
const message = config.message;
const helper = require('../helper');
const responseHelper = helper.response;
const service = require('../service');
const linkAccountService = service.linkAccount;
const _ = require('lodash');

let init = (app) => {
    app.post('/link-account', linkAccount);
};

let linkAccount = (request, response) => {
    const {token} = request.body;

    if (_.isEmpty(token)) {
        return responseHelper.internalServerError(response, {
            message: message.token_not_provided
        });
    }
    linkAccountService.link(token)
        .then((linkedStatus) => {
            if (!linkedStatus.success) {
                return responseHelper.internalServerError(response, {
                    message: linkedStatus.message
                });
            }
            responseHelper.success(response);
        })
        .catch((e) => {
            console.error(e);
        });
};

module.exports = {
    init: init
};