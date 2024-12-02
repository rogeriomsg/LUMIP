const express = require('express')
const app = express();
const router = require("./ROUTERS")

app.use(express.json())
app.use(router.Device)
app.use(router.User)
app.use(router.Gateway)
app.use(router.DeviceCategory)

module.exports = app;
