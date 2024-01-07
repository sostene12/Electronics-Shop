import User from "../model/User";

const verifyEmail = async (req,res,next) =>{
    const user = await User.findOne({email:req.body.username});
        if(user.isVerified){
            next()
        }
        else{
            return res.status(404).json('PLease verify your email');
        }
}

export default verifyEmail;