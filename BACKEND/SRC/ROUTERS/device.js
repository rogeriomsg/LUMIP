const express = require('express');
const router = express.Router();
const Controllers = require("../CONTROLLERS")
const Middlewares = require('../MIDDLEWARES');

/* HTTP status
*   2XX = sucesso
*   4XX = Erro do cliente
*   5XX = Erro do Servidor
*/
const textObject = "device" 

router.get(`/${textObject}`,Controllers.Device.getAll);

router.get(`/${textObject}/:id`,Controllers.Device.getById);

router.delete(`/${textObject}/:id`,Controllers.Device.delete);

router.post(`/${textObject}/create`, Middlewares.Device.ValidateFields, Controllers.Device.create );

router.patch(`/${textObject}/:id`, Middlewares.Device.ValidateFields, Controllers.Device.update );

module.exports = router;