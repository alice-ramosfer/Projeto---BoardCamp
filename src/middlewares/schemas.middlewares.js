export function validateSchema(schema){

    return (req, res, next) => {
        
        const validates = schema.validate(req.body, {abortEarly:false});
       
        if (validates.error) throw{
            type: "Bad_Request",
            message: validates.error.details.map(detail => detail.message)
            
        }
        next();
    }
};