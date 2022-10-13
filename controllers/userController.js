import User from '../model/User';

const Signup_post=async(req,res)=>{
    const data=req.body;
    try{
        const user= new User(data);
        res.status(201).send(user)

    }
    catch(err){
        res.status(404).json({error})
    }
}
export default Signup_post;