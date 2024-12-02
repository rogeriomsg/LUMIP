const Models = require('../MODELS');

exports.getAll = async (req, res) => {
    console.log(req.body);
    await Models.User.find().then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });       
};

exports.getById = async (req, res) => {
    const {id} = req.params ;

    await Models.User.findById(id).then(data => {        
        res.status(200).json(data);             
    }).catch( err => {
        res.status(500).json({ message: err.message});
    });
};

exports.create = async (req, res) => {
    console.log(req.body);

    const user = new Models.User({
        name: req.body.name,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
     });

    await Models.User.create(user).then(data => {      
        res.status(201).json(data);   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
 };

exports.delete = async (req, res) => {
    const {id} = req.params ;
    console.log(id);

    await Models.User.findByIdAndDelete(id).then(data => {      
        res.status(204).json();   
    }).catch(err => {
        res.status(404).json({message: err.message });
    }); 
};

exports.update = async (req, res) => {
    const {id} = req.params ;

    const user = {
        name: req.body.name,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,                       
    };
    await Models.User.findByIdAndUpdate(id, user , {new: true}).then(data => {        
        res.status(204).json();             
    }).catch( err => {
        res.status(400).json({ message: err.message});
    }); 
};
