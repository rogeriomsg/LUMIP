exports.validateName = async (req, res , next) => {
    console.log(req.body);

    const {body} = req ;

    if(body.name === undefined)
    {
        return res.status(400).json({message:"The field 'Name' is required." })
    }
    if(body.name === "")
    {
        return res.status(400).json({message:"The field 'Name' cannot be empty." })
    }

    next();       
 };

 exports.validateDescription = async (req, res , next) => {
    console.log(req.body);

    const {body} = req ;

    if(body.description === undefined)
    {
        return res.status(400).json({message:"The field 'description' is required." })
    }
    if(body.description === "")
    {
        return res.status(400).json({message:"The field 'description' cannot be empty." })
    }

    next();       
 };
