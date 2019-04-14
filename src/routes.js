const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
  '/boxes/:id/files',
  multer(multerConfig).single('file'),
  FileController.store
);

routes.get('/teste', (req, res) => {
  return res.send('Hello Rocket');
});

routes.get('/lancamento', (req, res) => {
  return res.send('Tela de lançamentos');
});

module.exports = routes;
