const ctrl = require('./controller');

module.exports = (app) => {
    app.get('/api/expected', ctrl.getExpected);
    app.get('/api/actual', ctrl.getActual);
}