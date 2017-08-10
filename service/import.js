const helper = require('../helper');
const tokenHelper = helper.token;
const config = require('../config');
const message = config.message;
const canvasService = require('./canvas');

module.exports = {
    import: (token) => {
        return tokenHelper.getToken(token)
            .then(foundToken => {
                if (foundToken) {
                    return canvasService.fetchCourses(token)
                        .then(courses => {
                            return tokenHelper.updateTokenWithCourses(token, courses)
                        })
                        .then(updatedToken => {
                            return {
                                success: true,
                                courses: updatedToken
                            };
                        });
                }
                return {
                    success: false,
                    message: message.token_not_found
                };
            });
    }
};