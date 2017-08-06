const helper = require('../helper');
const responseHelper = helper.response;

let init = (app) => {
    app.post('/import', importCourses);
};

let importCourses = (request, response) => {
    responseHelper.success(response, 'import is under development');
};

module.exports = {
    init: init
};