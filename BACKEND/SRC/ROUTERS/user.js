const express = require('express');
const router = express.Router();
const Controllers = require("../CONTROLLERS")
const Middlewares = require('../MIDDLEWARES');


router.get("/user",Controllers.User.getAll);

router.get("/user/:id",Controllers.User.getById);

router.delete("/user/:id",Controllers.User.delete);

router.post("/user/create",Middlewares.User.validateName,Controllers.User.create);

router.patch("/user/:id",Middlewares.User.validateName,Controllers.User.update);


module.exports = router;