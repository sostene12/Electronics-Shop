import jwt from "jsonwebtoken";

export const sign = (payload) =>{
    jwt.sign(payload,process.env.JWT_SCRETE_KEY,{expiresIn:'24h'});
}

export const verify = (payload) => jwt.verify(payload,process.env.JWT_SCRETE_KEY);
