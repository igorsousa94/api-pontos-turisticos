module.exports = app => {
    const controller = require('../controllers/pontosTuristicosController')();
    app.route('/api/v1/pontos-turisticos').get(controller.listaPontosTuristicos);
}