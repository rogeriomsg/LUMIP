const express = require('express')
const app = express();
const router = require("./ROUTERS")
const { errors } = require('celebrate');
const { ValidationErrorMessage } = require('./MIDDLEWARES/message');

app.use(express.json())
app.use("/device",router.Device)
app.use("/user",router.User)
app.use("/gateway",router.Gateway)
app.use("/device_category",router.DeviceCategory)
app.use("/api",router.WebhookToMQTT)

// Middleware para tratar erros de valida��o
app.use(errors());

//app.use(ValidationErrorMessage);
// Middleware personalizado para formatar erros
app.use(ValidationErrorMessage);

module.exports = app;
