const mongoose =require('mongoose')
const transectionschema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:[true,'amount is required']
    },
    
    category:{
        type:String,
        required:[true,'category is required']
    },
    reference:{
        type:String,
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    type:{
        type:String,
        required:[true,'type is required']
    },
    date:{
        type:Date,
        require:[true,'date is required']
    }

},{timestamps:true})

const transectionModel =mongoose.model('transections',transectionschema)
module.exports=transectionModel;