const api = require('../api');

let initializeRouter = (app) => {
    app.get('/', (request, response) => {
        response.send('Welcome to Canvas Consumer API.');
    });
    app.post('/link-account', api.linkAccount);
    app.post('/import', api.import);
    app.get('/courses', api.courses);
    app.use((request, response) => {
        response.status(404).send('Requested service not found');
    });
};

module.exports = initializeRouter;