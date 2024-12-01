const mongoose = require("mongoose");

const gatewaySchema = new mongoose.Schema({   
    name: { type: String , default: ""},        
    gId : { type: String },
    geolocation:{
        lat:{ type : Number , default: 0 },
        lng:{ type : Number , default: 0},
        alt:{ type : Number , default: 0}
    },
    address: { type: String ,default: ""},
});

const Gateway = mongoose.model("Gateway", gatewaySchema );

module.exports = Gateway