import jwt  from "jsonwebtoken";

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token,process.env.JWT_SCRETE_KEY,(error,user) => {
            if(error){
                res.status(403).json({error:"Invalid Token"});
            } else{
                req.user=user;
                next();
            }
        })
    } else{
        return res.status(401).json({error:"You are not authenticated!"});
    }
    
}

const verifyTokenAndClient = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.role === 'client'){
            next();
        }
        else{
             res.status(401).json({error:"you are not Authenticated"});
        }
    })
}

const verifyTokenAndSupplier = (req,res,next) =>{
    verifyToken(req,res,() =>{
        if(req.role === 'supplier'){
            next();
        }else{
            res.status(401).json({error:"you can not trade"});
        }
    })
}

const verifyTokenAndAdmin = (req,res,next) =>{
    verifyToken(req,res,() =>{
        if(req.user.role === 'admin'){
            next();
        }else{
            res.status(401).json({error:"you are not admin"});
        }
    })
}

export {verifyTokenAndClient,verifyTokenAndSupplier,verifyTokenAndAdmin}
