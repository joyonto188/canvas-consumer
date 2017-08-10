const Promise = require('bluebird');
const dbHelper = require('../helper/database');
const request = require('request');
const tokenCollection = 'token';

let getToken = (token) => {
    return new Promise(function (resolve, reject) {
        dbHelper
            .dbClient
            .collection(tokenCollection)
            .findOne(
                {
                    token: token
                }, {}, function (err, foundToken) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(!!foundToken);
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

let updateTokenWithCourses = (token, courses) => {
    return dbHelper
        .dbClient
        .collection(tokenCollection)
        .findOneAndUpdate({
            token: token
        }, {
            $set: {
                courses: courses
            }
        }, {
            upsert: false,
            returnNewDocument: true
        })
        .then(courses => {
            return courses.value;
        });
};

module.exports = {
    getToken: getToken,
    saveToken: saveToken,
    updateTokenWithCourses: updateTokenWithCourses
};