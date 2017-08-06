const helper = require('../helper');
const responseHelper = helper.response;

let init = (app) => {
    app.get('/courses', getCourses);
};

let getCourses = (request, response) => {
    responseHelper.success(response, 'courses is under development');
};

module.exports = {
    init: init
};