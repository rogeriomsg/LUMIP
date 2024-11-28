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
