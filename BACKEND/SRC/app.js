const express = require('express')
const app = express();
const router = require("./ROUTERS")

app.use(express.json())
app.use("/device",router.Device)
app.use("/user",router.User)
app.use("/gateway",router.Gateway)
app.use("/device_category",router.DeviceCategory)

module.exports = app;
