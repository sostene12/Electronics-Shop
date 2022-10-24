export const  validate= (schema) =>{
    return (req,res,next) =>{
        const {error} = schema.validate(req.body);
        if(error){
            console.log(error);
            res.status(400).json(error.details[0].message);
        }
        next()
    }

};