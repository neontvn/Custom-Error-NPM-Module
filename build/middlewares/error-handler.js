"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
exports.errorHandler = function (err, req, res, next) {
    /*
        
        //Handling this error as Request validation error
        if(err instanceof RequestValidationError){
            
            // This another way in which the error needs to be formatted into the required format
            // This is avoided by creating a function in the class CustomError which returns the formatted
            // array of errors.
            
            const formattedError = err.errors.map(error=>{
                    return { message : error.msg, field : error.param }
                 })
            return res.status(400).send({errors: formattedError});
            

            return res.status(err.statusCode).send({ errors: err.serializeErrors() });

        }

        //Handling this error as db connection error
        if(err instanceof DatabaseConnectionError){
            return res.status(err.statusCode).send({ errors: err.serializeErrors() });
        }

        */
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400)
        .send({
        errors: [
            {
                message: "Something went wrong"
            }
        ]
    });
};
