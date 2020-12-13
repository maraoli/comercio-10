const express = require('express')
const routes = express.Router();

const User = require('../src/controllers/user')

routes.get('/login', User.show);
routes.post('/cadastro', User.create);
routes.delete('/user', User.delete);

module.exports = routes;