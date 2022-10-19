import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    firstNmae:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,required:true},
});

const Supplier= mongoose.model('Supplier',supplierSchema);

export default Supplier;