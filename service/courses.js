const helper = require('../helper');
const tokenHelper = helper.token;
const config = require('../config');
const message = config.message;

module.exports = {
    getCourses: (token) => {
        return tokenHelper.getToken(token)
            .then(foundToken => {
                if (foundToken) {
                    return {
                        success: true,
                        courses: foundToken.courses || {}
                    }
                }
                return {
                    success: false,
                    message: message.token_not_found
                };
            });
    }
};