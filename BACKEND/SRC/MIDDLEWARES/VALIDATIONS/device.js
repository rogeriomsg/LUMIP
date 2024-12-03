const Services = require("../../SERVICES")
const { celebrate, Joi , Segments } = require('celebrate');
const { body,} = require('express-validator');

function printf(format, ...args) {
    return format.replace(/%s/g, () => args.shift());
}

// const validateName = async (req, res) => {
//     if(req.method !== 'POST' ) return;
//     console.log("validateName  "+req.body); 
//     const campo = "name";   
//     const {body} = req ;
//     if(body[campo] === undefined)
//     {
//         res.status(Services.HTTPStatus.MANDATORY_FIELDS_NOT_PROVIDED.code);
//         throw new Error(printf(Services.HTTPStatus.MANDATORY_FIELDS_NOT_PROVIDED.message,campo));
//     }
//     if(body[campo].trim() === "")
//     {
//         res.status(Services.HTTPStatus.EMPTY_MANDATORY_FIELDS.code);
//         throw new Error(printf(Services.HTTPStatus.EMPTY_MANDATORY_FIELDS.message,campo));
//     }     
//  };

// const validateDeviceId = async (req, res) => {
//     if(req.method !== 'POST' ) return;
//     console.log("validateDeviceId  "+req.body);
//     const campo = "deviceId";   
//     const {body} = req ;
//     if(body[campo] === undefined)
//     {
//         res.status(Services.HTTPStatus.MANDATORY_FIELDS_NOT_PROVIDED.code);
//         throw new Error(printf(Services.HTTPStatus.MANDATORY_FIELDS_NOT_PROVIDED.message,campo));
//     }
//     if(body[campo] <= 0)
//     {
//         res.status(Services.HTTPStatus.INVALID_MANDATORY_FIELDS.code);
//         throw new Error(printf(Services.HTTPStatus.INVALID_MANDATORY_FIELDS.message,campo));
//     }       
//  };
// Middleware de valida��o geral
// const Validate = async (req, res, next) => {
//     try {
//       // Executa todas as valida��es em paralelo
//       await Promise.all([
//         Services.Authentication.IsAuthenticated(req,res),
//         //validateName(req,res),
//         //validateDeviceId(req,res),


//         //adicionar aqui mais func�es de valida��o conforme necess�rio
//       ]);
//       next(); // Continua para o controlador se todas as valida��es passarem
//     } catch (error) {
//       res.json({ message: error.message }); // Retorna o erro de valida��o
//     }
// };

// Define o schema de valida��o de cria��o
const deviceCreateSchema = {[Segments.BODY]: Joi.object({
        deviceId: Joi.number().integer().min(1).required().messages({
            'number.base': 'O campo "deviceId" deve ser um n�mero inter.',
            'number.min': 'O campo "deviceId" deve ser maior que 0.',
            'any.required': 'O campo "deviceId" � obrigat�rio.',
        }),
        name: Joi.string().min(3).required().messages({
            'string.base': 'O campo name deve ser um texto.',
            'string.min': 'O campo name deve ter pelo menos 3 caracteres.',
            'any.required': 'O campo name � obrigat�rio.',
        }),       
    }),
};
const ValidateCreationBodyCelebrate = celebrate(deviceCreateSchema)

const FieldsValidators = (req, res) => {
    console.log("validation aqui")
    return [
        body('name').isString().isLength({ min: 3 }).withMessage('Nome deve ter pelo menos 3 caracteres'),        
    ]
}
const CheckErrors = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}


const ValidateCreationBodyExpress = async (req, res, next) => {
    try {
      // Executa todas as valida��es em paralelo
      await Promise.all([
        FieldsValidators(req,res),
        CheckErrors(req,res)
        //validateName(req,res),
        //validateDeviceId(req,res),
        //adicionar aqui mais func�es de valida��o conforme necess�rio
      ]);
      next(); // Continua para o controlador se todas as valida��es passarem
    } catch (error) {
      res.json({ message: error.message }); // Retorna o erro de valida��o
    }
};


module.exports = { 
    ValidateCreationBodyCelebrate,
    ValidateCreationBodyExpress,
};




