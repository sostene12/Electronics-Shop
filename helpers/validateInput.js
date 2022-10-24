import Joi from "joi";

const Schema = Joi.object({
    firstName:Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+ [a-zA-Z]+$'))
    ,
    lastName:Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+ [a-zA-Z]+$'))
    ,
    username:Joi.string()
        .min(5)
        .required(),
    password:Joi.string()
        .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')),
    email:Joi.string()
        .pattern(new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$'))
        .lowercase()
    ,
    phoneNumber:Joi.string()
        .min(10)
        .max(13)
});

export default Schema;