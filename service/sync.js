const helper = require('../helper');
const tokenHelper = helper.token;
const promise = require('bluebird');
const canvasService = require('./canvas');

module.exports = {
    sync: () => {
        return tokenHelper.getTokens()
            .then(tokens => {
                promise.map(tokens, (tokenObject) => {
                    return canvasService.fetchCourses(tokenObject.token)
                        .then(courses => {
                            return tokenHelper.updateTokenWithCourses(tokenObject.token, courses)
                        })
                        .then(updatedToken => {
                            return {
                                success: true,
                                courses: updatedToken
                            };
                        });
                });
            });
    }
};