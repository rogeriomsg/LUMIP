const mongoose = require("mongoose");

const deviceCategorySchema = new mongoose.Schema(
  {   
    name: {type : String , require : true},
    description: {type : String } ,
    selected :  {type : String }  
  }
);

const DeviceCategory = mongoose.model("DeviceCategory", deviceCategorySchema );

module.exports = DeviceCategory