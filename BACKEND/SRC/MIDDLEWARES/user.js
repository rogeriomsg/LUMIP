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

// Middleware de valida��o geral
const Validate = async (req, res, next) => {
    try {
      // Executa todas as valida��es em paralelo
      await Promise.all([
        Services.Authentication.IsAuthenticated(req,res),
        validateName(req),
        //adicionar aqui mais func�es de valida��o conforme necess�rio
      ]);
      next(); // Continua para o controlador se todas as valida��es passarem
    } catch (error) {
      res.json({ error: error.message }); // Retorna o erro de valida��o
    }
};

module.exports = { 
    Validate ,
};