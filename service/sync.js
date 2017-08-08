const helper = require('../helper');
const tokenHelper = helper.token;
const promise = require('bluebird');

module.exports = {
    sync: () => {
        return tokenHelper.getTokens()
            .then(tokens => {
                promise.map(tokens, (tokenObject) => {
                    return tokenHelper.importCourses(tokenObject.token);
                });
            });
    }
};