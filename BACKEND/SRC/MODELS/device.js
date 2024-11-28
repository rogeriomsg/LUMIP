const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {   
    name: {type : String , require : true},
    description: {type : String } ,
  },
  {
    timestamps: true, // Ativa automaticamente os campos createdAt e updatedAt
  }
);


const Device = mongoose.model("Device", deviceSchema );

module.exports = Device