const config = require('../config');
const message = config.message;
const helper = require('../helper');
const responseHelper = helper.response;
const service = require('../service');
const linkAccountService = service.linkAccount;
const importService = service.import;
const coursesService = service.courses;
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
            linkAccountService.link(token)
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
        const token = request.body;

        if (_.isEmpty(token)) {
            responseHelper.failure(response, {
                message: message.token_not_provided
            });
        }
        else {
            importService.import(token)
                .then((importStatus) => {
                    if (!importStatus.success) {
                        responseHelper.failure(response, {
                            message: importStatus.message
                        });
                    }
                    else {
                        responseHelper.success(response, importStatus.courses);
                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    },

    courses: (request, response) => {
        const token = request.query.token;

        if (_.isNil(token)) {
            responseHelper.failure(response, {
                message: message.token_not_provided
            });
        }
        else {
            coursesService.getCourses(token)
                .then(coursesStatus => {
                    if (!coursesStatus.success) {
                        responseHelper.failure(response, {
                            message: coursesStatus.message
                        });
                    }
                    else {
                        responseHelper.success(response, coursesStatus.courses);
                    }
                })
        }
    }
};