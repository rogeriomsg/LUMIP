const express = require('express');
const router = express.Router();
const Controllers = require("../CONTROLLERS")
const Middlewares = require('../MIDDLEWARES');

/* HTTP status
*   2XX = sucesso
*   4XX = Erro do cliente
*   5XX = Erro do Servidor
*/
const textObject = "user" 

router.get(`/${textObject}`, Controllers.User.getAll);

router.get(`/${textObject}/:id`, Controllers.User.getById);

router.delete(`/${textObject}/:id`, Controllers.User.delete);

router.post(`/${textObject}/create`, Middlewares.User.ValidateFields, Controllers.User.create);

router.patch(`/${textObject}/:id`, Middlewares.User.ValidateFields, Controllers.User.update);


module.exports = router;