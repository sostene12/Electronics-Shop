import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        lowercase:true
    },
    lastName:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    emailToken:{
        type:String
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    },
    role:{
        type:Array,
        default:'client'
    }
},{timestamps: true});

const User=mongoose.model('User',userSchema);
export default User;
