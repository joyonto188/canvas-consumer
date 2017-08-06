const promise = require('bluebird');
const dbHelper = require('../helper/database');
const config = require('../config');
const message = config.message;
const tokenCollection = 'token';

let isTokenAlreadyUsed = (token) => {
    return new promise(function (resolve, reject) {
        dbHelper.dbClient.collection(tokenCollection).findOne(token, {}, function (err, match) {
            if (err) {
                reject(err);
            }
            else {
                if (match) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }
        });
    })
};

let saveToken = (token) => {
    return dbHelper.dbClient.collection(tokenCollection).insert(token)
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
                else {
                    return saveToken(token);
                }
            });
    }
};