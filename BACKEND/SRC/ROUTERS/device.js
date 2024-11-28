const express = require('express');
const router = express.Router();
const Controllers = require("../CONTROLLERS")
const Middlewares = require('../MIDDLEWARES');

/* HTTP status
*   2XX = sucesso
*   4XX = Erro do cliente
*   5XX = Erro do Servidor
*/

router.get("/devices",Controllers.Device.getAll);

router.get("/devices/:id",Controllers.Device.getById);

router.delete("/devices/:id",Controllers.Device.delete);

router.post("/devices/create",
    Middlewares.Device.validateName,
    Middlewares.Device.validateDescription,
    Controllers.Device.insert
);

router.patch("/devices/:id",
    Middlewares.Device.validateName,
    Middlewares.Device.validateDescription,
    Controllers.Device.update
);

module.exports = router;