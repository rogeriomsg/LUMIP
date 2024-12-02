const Models = require('../MODELS');

exports.getAll = async (req, res) => {
    await Models.DeviceCategory.find().then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });       
};

exports.getById = async (req, res) => {
    const {id} = req.params ;

    await Models.DeviceCategory.findById(id).then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });
};

exports.create = async (req, res) => {
    //console.log(req.body);

    const Device = new Models.DeviceCategory({
        name: req.body.name,
        description: req.body.description,
     });

    await Models.DeviceCategory.create(Device).then(data => {      
        res.status(201).json(data);   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
 };

exports.delete = async (req, res) => {
    const {id} = req.params ;
    console.log(id);

    await Models.DeviceCategory.findByIdAndDelete(id).then(data => {      
        res.status(204).json();   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
};

exports.update = async (req, res) => {
    const {id} = req.params ;

    const update = {
        name: req.body.name,
        description : req.body.description,                       
    };
    await Models.DeviceCategory.findByIdAndUpdate(id, update , {new: true}).then(data => {        
        res.status(204).json();             
    }).catch( err => {
        res.status(400).json({ message: err.message});
    }); 
};