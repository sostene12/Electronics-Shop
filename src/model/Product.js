import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    color:{type:Array},
    size:{type:Array},
    categories:{type:Array},
    inStock:{type:Boolean,default:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Product = mongoose.model('Product',productSchema);

export default Product;