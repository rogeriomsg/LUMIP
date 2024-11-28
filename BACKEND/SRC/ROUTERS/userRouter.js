const express = require('express');
const router = express.Router();
const Controllers = require("../CONTROLLERS")
const Middlewares = require('../MIDDLEWARES');


router.get("/user",Controllers.Device.getAll);

router.post("/user/insert",Controllers.Device.insert);

router.delete("/user/:id",Controllers.Device.delete);

router.put("/user/:id",Controllers.Device.update);



module.exports = router;