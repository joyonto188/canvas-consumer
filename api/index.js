const config = require('../config');
const message = config.message;
const helper = require('../helper');
const responseHelper = helper.response;
const service = require('../service');
const _ = require('lodash');

module.exports = {
    linkAccount: (request, response) => {
        const token = request.body;

        if (_.isEmpty(token)) {
            responseHelper.failure(response, {
                message: message.token_not_provided
            });
        }
        else {
            service.linkAccount.link(token)
                .then((linkedStatus) => {
                    if (!linkedStatus.success) {
                        responseHelper.failure(response, {
                            message: linkedStatus.message
                        });
                    }
                    else {
                        responseHelper.success(response);
                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    },

    import: (request, response) => {
        responseHelper.success(response, 'import is under development');
    },

    courses: (request, response) => {
        responseHelper.success(response, 'courses is under development');
    }
};