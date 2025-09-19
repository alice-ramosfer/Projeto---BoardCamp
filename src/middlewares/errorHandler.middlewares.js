export function errorHandler (err, req, res, next){
    if (err.type==="conflict"){
        return res.status(409).send(err.message);
    }

    if (err.type==="Bad_Request"){
        return res.status(400).send(err.message);
    }
    if (err.type==="NotFound"){
        return res.status(404).send(err.message);
    }

    if (err.type==="Unprocessable_Entity"){
        return res.status(422).send(err.message);
    }

    console.error(err);
    return res.status(500).send(err.message);

}