const helper = require('../helper');
const tokenHelper = helper.token;
const config = require('../config');
const message = config.message;

module.exports = {
    link: (token) => {
        return tokenHelper.getToken(token)
            .then(alreadyUsed => {
                if (alreadyUsed) {
                    return {
                        success: false,
                        message: message.token_already_used
                    };
                }
                return tokenHelper.saveToken(token);
            });
    }
};