let getDatabaseConfig = () => {
    return {
        name: 'canvas-consumer',
        host: '127.0.0.1',
        port: 27017
    };
};
let getDatabaseUrl = (config) => {
    let credential = (config.userName && config.password) ? (config.userName + ':' + config.password + '@' ) : '';
    return process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        credential + config.host + ':' + config.port + '/' + config.name;
};

module.exports = {
    getDatabaseConfig: getDatabaseConfig,
    getDatabaseUrl: getDatabaseUrl
};