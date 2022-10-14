import jwt from "jsonwebtoken";

const sign = (payload) =>{
    jwt.sign(payload,process.env.JWT_SCRETE_KEY,{expiresIn:'24h'});
}

const verify = (payload) => jwt.verify(payload,process.env.JWT_SCRETE_KEY);

export {sign,verify}