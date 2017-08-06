const helper = require('../helper');
const tokenHelper = helper.token;
const config = require('../config');
const message = config.message;

module.exports = {
    import: (token) => {
        return tokenHelper.getToken(token)
            .then(foundToken => {
                if (foundToken) {
                    return tokenHelper.importCourses(token)
                        .then(courses => {
                            return {
                                success: true,
                                courses: courses
                            }
                        });
                }
                else {
                    return {
                        success: false,
                        message: message.token_not_found
                    };
                }
            });
    }
};