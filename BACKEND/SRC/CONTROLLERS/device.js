const Models = require('../MODELS');

exports.getAll = async (req, res) => {
    await Models.Device.find().then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });       
};

exports.getById = async (req, res) => {
    const {id} = req.params ;

    await Models.Device.findById(id).then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });
};

exports.insert = async (req, res) => {
    //console.log(req.body);
    /*
    name: {type : String , require : true},
    devId :  { type : Number , require : true },
    device_type:  { type: String , default : "Fotocélula" },
    geolocation:  { 
      lat: { type : Number , default : 0 },
      lng: { type : Number , default : 0 },
      alt: { type : Number , default : 0 },
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'deviceCategory' },
    operating_mode : {type: String , enum :['Convencional', 'Comandado' , 'Agendado' ] , default : 'Convencional'},
    description: {type : String ,default: ""} ,
    rx:  { 
      hopCount: { type : Number , default : 5 }
    },
    is_active: { type: Boolean , default: false},
    gateway: { type: mongoose.Schema.Types.ObjectId, ref: 'gateway'},
    */

    const Device = new Models.Device({
        name: req.body.name,
        devId :  req.body.devId,
        device_type:  req.body.device_type || "Fotocélula",
        geolocation:  { 
            lat: req.body.geolocation.lat || 0.0,
            lng: req.body.geolocation.lng || 0.0,
            alt: req.body.geolocation.alt || 0.0,
        },
        category: req.body.category ,
        operating_mode : req.body.operating_mode,
        description: req.body.description || "",
        rx:  { 
            hopCount: req.body.rx.hopCount,
        },
        is_active: req.body.is_active,
        gateway: req.body.gateway,
     });

    await Models.Device.create(Device).then(data => {      
        res.status(201).json(data);   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
 };

exports.delete = async (req, res) => {
    const {id} = req.params ;
    console.log(id);

    await Models.Device.findByIdAndDelete(id).then(data => {      
        res.status(204).json();   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
};

exports.update = async (req, res) => {
    const {id} = req.params ;
    /*
    name: {type : String , require : true},
    devId :  { type : Number , require : true },
    device_type:  { type: String , default : "Fotocélula" },
    geolocation:  { 
      lat: { type : Number , default : 0 },
      lng: { type : Number , default : 0 },
      alt: { type : Number , default : 0 },
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'deviceCategory' },
    operating_mode : {type: String , enum :['Convencional', 'Comandado' , 'Agendado' ] , default : 'Convencional'},
    description: {type : String ,default: ""} ,
    rx:  { 
      hopCount: { type : Number , default : 5 }
    },
    is_active: { type: Boolean , default: false},
    gateway: { type: mongoose.Schema.Types.ObjectId, ref: 'gateway'},
    */

    const device = {
        name: req.body.name,
        devId :  req.body.devId,
        device_type:  req.body.device_type || "Fotocélula",
        geolocation:  { 
            lat: req.body.geolocation.lat || 0.0,
            lng: req.body.geolocation.lng || 0.0,
            alt: req.body.geolocation.alt || 0.0,
        },
        category: req.body.category ,
        operating_mode : req.body.operating_mode,
        description: req.body.description || "",
        rx:  { 
            hopCount: req.body.rx.hopCount,
        },
        is_active: req.body.is_active,
        gateway: req.body.gateway,                       
    };
    await Models.Device.findByIdAndUpdate(id, device , {new: true}).then(data => {        
        res.status(204).json();             
    }).catch( err => {
        res.status(400).json({ message: err.message});
    }); 
};

 