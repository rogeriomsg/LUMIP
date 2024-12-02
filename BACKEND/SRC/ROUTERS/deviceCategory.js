const express = require('express');
const router = express.Router();
const Controllers = require("../CONTROLLERS")
const Middlewares = require('../MIDDLEWARES');

/* HTTP status
*   2XX = sucesso
*   4XX = Erro do cliente
*   5XX = Erro do Servidor
*/
const textObject = "device_category" 

router.get(`/${textObject}`,Controllers.DeviceCategory.getAll);

router.get(`/${textObject}/:id`,Controllers.DeviceCategory.getById);

router.delete(`/${textObject}/:id`,Controllers.DeviceCategory.delete);

router.post(`/${textObject}/create`,Controllers.DeviceCategory.create);

router.patch(`/${textObject}/:id`, Controllers.DeviceCategory.update);

module.exports = router;