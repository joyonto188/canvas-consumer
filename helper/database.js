const blueBird = require('bluebird');
const dbClient = require('mongodb').MongoClient;
const config = require('../config');
const databaseSettings = config.databaseSettings;

let initializeDatabase = () => {
    let uriString = databaseSettings.getDatabaseUrl(databaseSettings.getDatabaseConfig());
    let connectionString = 'mongodb://' + uriString;

    return dbClient.connect(connectionString, {
        promiseLibrary: blueBird
    })
        .then((dbClient) => {
            console.log("Successfully connected with database!");
            module.exports.dbClient = dbClient;
        });
};

module.exports = {
    initialize: initializeDatabase
};