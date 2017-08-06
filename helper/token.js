const promise = require('bluebird');
const dbHelper = require('../helper/database');
const request = require('request');
const tokenCollection = 'token';
const canvasUrl = 'http://canvas.differ.chat/api/v1/users/self/courses?access_token=';

let getToken = (token) => {
    return new promise(function (resolve, reject) {
        dbHelper.dbClient.collection(tokenCollection).findOne(token, {}, function (err, foundToken) {
            if (err) {
                reject(err);
            }
            else {
                if (foundToken) {
                    resolve(foundToken);
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

let updateTokenWithCourses = (token, courses) => {
    return dbHelper.dbClient.collection(tokenCollection).findOneAndUpdate({
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

let importCourses = (token) => {
    return new promise(function (resolve, reject) {
        request.get(canvasUrl, {
            'auth': {
                'bearer': token.token
            }
        }, function (error, response, body) {
            if (error || response.statusCode === 401) {
                reject(error || 'Unauthorized');
            }
            else {
                resolve(body);
            }
        });
    })
        .then(courses => {
            return updateTokenWithCourses(token.token, courses);
        });
};

module.exports = {
    getToken: getToken,
    saveToken: saveToken,
    importCourses: importCourses
};