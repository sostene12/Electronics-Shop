import jwt  from "jsonwebtoken";
import User from "../model/User";

const verifyToken = (req,res,next) =>{
    const authHeader = req.header.token;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        console.log(token);
    }
    
}

export {verifyToken}
