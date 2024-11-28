const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {   
    name: {type : String , require : true},
    description: {type : String } ,
  }
);


const Device = mongoose.model("Device", deviceSchema );

module.exports = Device