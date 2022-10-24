import Joi from "joi";

const Schema = Joi.object({
    firstname:Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+ [a-zA-Z]+$'))
    ,
    lastname:Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+ [a-zA-Z]+$'))
    ,
    username:Joi.string()
        .min(5)
        .required(),
    password:Joi.string()
        .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')),
    email:Joi.string()
        .pattern(new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$'))
    ,
});

export default Schema;