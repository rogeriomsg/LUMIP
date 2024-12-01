const Models = require('../MODELS');

exports.getAll = async (req, res) => {
    await Models.Gateway.find().then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });       
};

exports.getById = async (req, res) => {
    const {id} = req.params ;

    await Models.Gateway.findById(id).then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });
};

exports.delete = async (req, res) => {
    const {id} = req.params ;
    console.log(id);

    await Models.Gateway.findByIdAndDelete(id).then(data => {      
        res.status(204).json();   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
};

exports.insert = async (req, res) => {
    //console.log(req.body);
    /*
    name: { type: String , default: ""},        
    gId : { type: String },
    geolocation:{
        lat:{ type : Number , default: 0 },
        lng:{ type : Number , default: 0},
        alt:{ type : Number , default: 0}
    },
    address: { type: String ,default: ""},
    */

    const gateway = new Models.Gateway({
        name: req.body.name || "",
        gId: req.body.gId,
        geolocation:{
            lat: req.body.geolocation.lat || 0.0,
            lng: req.body.geolocation.lnt || 0.0,
            alt: req.body.geolocation.alt || 0.0,
        },
        address: req.body.address || "",
     });

    await Models.Gateway.create(gateway).then(data => {      
        res.status(201).json(data);   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
 };

exports.update = async (req, res) => {
    const {id} = req.params ;
    /*
    name: { type: String , default: ""},        
    gId : { type: String },
    geolocation:{
        lat:{ type : Number , default: 0 },
        lng:{ type : Number , default: 0},
        alt:{ type : Number , default: 0}
    },
    address: { type: String ,default: ""},
    */

    const update = {
        name: req.body.name || "",
        gId: req.body.gId,
        geolocation:{
            lat: req.body.geolocation.lat || 0.0,
            lng: req.body.geolocation.lnt || 0.0,
            alt: req.body.geolocation.alt || 0.0,
        },
        address: req.body.address || "",                     
    };
    await Models.Gateway.findByIdAndUpdate(id, update , {new: true}).then(data => {        
        res.status(204).json();             
    }).catch( err => {
        res.status(400).json({ message: err.message});
    }); 
};
