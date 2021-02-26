const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();
  require('../api/routes/pontosTuristicosRoutes')(app);

  // SETANDO VARIÁVEIS DA APLICAÇÃO 
  app.set('port', process.env.PORT || 80);

  // MIDDLEWARES
  app.use(bodyParser.json());

  return app;
};