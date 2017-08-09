const Promise = require('bluebird');
const dbHelper = require('../helper/database');
const config = require('../config');
const message = config.message;
const tokenCollection = 'token';

let isTokenAlreadyUsed = (token) => {
    return new Promise(function (resolve, reject) {
        dbHelper
            .dbClient
            .collection(tokenCollection)
            .findOne(
                {
                    token: token
                }, {}, function (err, match) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(!!match);
                });
    })
};

let saveToken = (token) => {
    return dbHelper
        .dbClient
        .collection(tokenCollection)
        .insert({
            token: token
        })
        .then(() => {
            return {
                success: true
            };
        });
};

module.exports = {
    link: (token) => {
        return isTokenAlreadyUsed(token)
            .then(alreadyUsed => {
                if (alreadyUsed) {
                    return {
                        success: false,
                        message: message.token_already_used
                    };
                }
                return saveToken(token);
            });
    }
};