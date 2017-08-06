const config = require('../config');
const message = config.message;
const helper = require('../helper');
const responseHelper = helper.response;
const service = require('../service');
const coursesService = service.courses;
const _ = require('lodash');

let init = (app) => {
    app.get('/courses', getCourses);
};

let getCourses = (request, response) => {
    const token = request.query.token;

    if (_.isNil(token)) {
        return responseHelper.internalServerError(response, {
            message: message.token_not_provided
        });
    }
    coursesService.getCourses(token)
        .then(coursesStatus => {
            if (!coursesStatus.success) {
                return responseHelper.internalServerError(response, {
                    message: coursesStatus.message
                });
            }
            responseHelper.success(response, coursesStatus.courses);
        })
};

module.exports = {
    init: init
};