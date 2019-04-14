const express = require('express');

const routes = express.Router();

routes.get('/teste', (req, res) => {
  return res.send('Hello World');
});

routes.get('/lancamento', (req, res) => {
  return res.send('Tela de lançamentos');
});

module.exports = routes;
