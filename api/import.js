const config = require('../config');
const message = config.message;
const helper = require('../helper');
const responseHelper = helper.response;
const service = require('../service');
const importService = service.import;
const _ = require('lodash');

let init = (app) => {
    app.post('/import', importCourses);
};

let importCourses = (request, response) => {
    const token = request.body;

    if (_.isEmpty(token)) {
        responseHelper.failure(response, {
            message: message.token_not_provided
        });
    }
    importService.import(token.token)
        .then((importStatus) => {
            if (!importStatus.success) {
                return responseHelper.failure(response, {
                    message: importStatus.message
                });
            }
            responseHelper.success(response, importStatus.courses);
        })
        .catch((e) => {
            console.error(e);
        });

};

module.exports = {
    init: init
};