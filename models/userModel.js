const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required + unique']
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },


},{timestamps:true});

//exp
const userModel=mongoose.model('users',userSchema)
module.exports=userModel