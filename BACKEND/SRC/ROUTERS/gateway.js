const express = require('express');
const router = express.Router();
const Controllers = require("../CONTROLLERS")
const Middlewares = require('../MIDDLEWARES');

/* HTTP status
*   2XX = sucesso
*   4XX = Erro do cliente
*   5XX = Erro do Servidor
*/
const textObject = "gateway" 

router.get(`/${textObject}`,Controllers.Gateway.getAll);

router.get(`/${textObject}/:id`,Controllers.Gateway.getById);

router.delete(`/${textObject}/:id`,Controllers.Gateway.delete);

router.post(`/${textObject}/create`,Controllers.Gateway.create);

router.patch(`/${textObject}/:id`, Controllers.Gateway.update);

module.exports = router;