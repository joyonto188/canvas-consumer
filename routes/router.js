const api = require('../api');

let initializeRouter = (app) => {
    app.get('/', (request, response) => {
        response.send('Welcome to Canvas Consumer API.');
    });
    api.init(app);
    app.use((request, response) => {
        response.status(404).send('Requested service not found');
    });
};

module.exports = initializeRouter;