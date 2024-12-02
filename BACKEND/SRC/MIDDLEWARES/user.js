const validateName = async (req) => {
    //console.log(req.body);
    const {body} = req ;
    if(body.name === undefined)
    {
        throw new Error("The field 'Name' is required.");
        //return res.status(400).json({message:"The field 'Name' is required." })
    }
    if(body.name === "")
    {
        throw new Error("The field 'Name' cannot be empty.");
        //return res.status(400).json({message:"The field 'Name' cannot be empty." })
    }      
 };

// Middleware de validação geral
const ValidateFields = async (req, res, next) => {
    try {
      // Executa todas as validações em paralelo
      await Promise.all([
        validateName(req),
        //adicionar aqui mais funcões de validação conforme necessário
      ]);
      next(); // Continua para o controlador se todas as validações passarem
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna o erro de validação
    }
};

module.exports = { 
    ValidateFields ,
};