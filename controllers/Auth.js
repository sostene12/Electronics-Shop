import User from "../model/User";
import CryptoJS from 'crypto-js';
import {sign} from "../helpers/jwt";
import jwt from "jsonwebtoken";

class AuthController{
    static async signup(req,res){
        try {
            const newUser = await new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
                age:req.body.age,
                gender:req.body.gender
            });
            const user = await newUser.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(401).json({error:error.message})
        }
    }

    static async login(req,res){
       try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(404).json({error:"Wrong Credentials"});
        }
        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if(originalPassword !== req.body.password){
            res.status(401).json({error:"Wrong Credentials"});
        }
        const accessToken = jwt.sign({id:user._id,role:"client"},process.env.JWT_SCRETE_KEY,{expiresIn:"24h"});

        const {password,...others} = user._doc;
        res.status(200).json({...others,accessToken});
       } catch (error) {
        res.status(404).json({error:error.message})
       }
    }
}

export default AuthController;