module.exports = () => {
    const customerWalletsDB = require('../data/pontosTuristicos.json');
    const controller = {};
  
    controller.listaPontosTuristicos = (req, res) => res.status(200).json(customerWalletsDB);
  
    return controller;
  }