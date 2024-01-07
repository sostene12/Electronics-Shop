import Joi from "joi";

export const loginSchema = Joi.object({
    username:Joi.string()
        .pattern(new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$'))
        .lowercase()
        .required()
        ,
    password:Joi.string()
        .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'))
        .required()
});
