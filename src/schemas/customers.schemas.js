import joi from "joi";

export const customersSchema = joi.object({
    name: joi.string().trim().min(1).required()
        .messages({
            "string.empty": "O nome não pode estar vazio",
            "string.min": "O nome deve ter pelo menos 1 caractere",
            "any.required": "O nome é obrigatório"
        }),
    
    phone: joi.string().trim().pattern(/^\d{10,11}$/).required()
        .messages({
            "string.empty": "O telefone não pode estar vazio",
            "string.pattern.base": "O telefone deve ter 10 ou 11 dígitos numéricos",
            "any.required": "O telefone é obrigatório"
        }),
    
    cpf: joi.string().trim().length(11).required()
        .messages({
            "string.empty": "O CPF não pode estar vazio",
            "string.length": "O CPF deve ter exatamente 11 dígitos",
            "any.required": "O CPF é obrigatório"
        })
});
