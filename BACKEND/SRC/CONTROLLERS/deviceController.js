const Models = require('../MODELS');

exports.getAll = async (req, res) => {
    console.log('device_list_get');
    try
    {
        const devices = await Models.Device.find() ;
        res.status(200).json(devices);  

    }
    catch(err)
    {
       res.status(500).send({ message: err.message});
    }
       
};
exports.get = async (req, res) => {
    const {id} = req.params ;

    Models.Device.findById(id).then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(400).json({ message: err.message});
    });
};

exports.insert = async (req, res) => {
    //console.log(req.body);

    const Device = new Models.Device({
        name: req.body.name,
        description: req.body.description,
     });

     Device
        .save()
        .then(data => {
           res.status(201).json(data);  
        })
        .catch(err => {
            res.status(400).json({message : err.message });
        });
 };

exports.delete = async (req, res) => {
    const {id} = req.params ;
    console.log(id);

    Models.Device.findByIdAndDelete(id).then(data => {      
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
    Models.Device.findByIdAndUpdate(id, update , {new: true}).then(data => {        
        res.status(204).json();             
    }).catch( err => {
        res.status(400).json({ message: err.message});
    }); 
};

 