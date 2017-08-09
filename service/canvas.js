const config = require('../config');
const settingsConfig = config.settings;
const Promise = require('bluebird');
const request = require('request');

module.exports = {
    fetchCourses: (token) => {
        return new Promise(function (resolve, reject) {
            request.get(settingsConfig.canvasUrl, {
                'auth': {
                    'bearer': token
                }
            }, function (error, response, body) {
                if (error || response.statusCode === 401) {
                    return reject(error || 'Unauthorized');
                }
                resolve(body);
            });
        });
    }
};