const Services = require("../SERVICES")

const validateName = async (req) => {
    //console.log(req.body);
    const {body} = req ;
    if(body.name === undefined)
    {
      res.status(Services.HTTPStatus.MANDATORY_FIELDS_NOT_PROVIDED_OR_INVALID)
      throw new Error("The field 'Name' is required.")
    }
    if(body.name === "")
    {
      res.status(Services.HTTPStatus.MANDATORY_FIELDS_NOT_PROVIDED_OR_INVALID)
      throw new Error("The field 'Name' cannot be empty.")
    }      
 };

// Middleware de validação geral
const Validate = async (req, res, next) => {
    try {
      // Executa todas as validações em paralelo
      await Promise.all([
        Services.Authentication.IsAuthenticated(req,res),
        validateName(req),
        //adicionar aqui mais funcões de validação conforme necessário
      ]);
      next(); // Continua para o controlador se todas as validações passarem
    } catch (error) {
      res.json({ error: error.message }); // Retorna o erro de validação
    }
};

module.exports = { 
    Validate ,
};