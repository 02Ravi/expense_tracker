const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors =require('colors')
const connectdb=require("./config/connect")
dotenv.config();
const path=require('path')

connectdb();    

//rest obj
const app=express()



//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())



//routes//user routes
app.use('/api/v1/users',require('./routes/userRoute'))
//static
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
//routes//transection routes
app.use('/api/v1/transections',require('./routes/transectionRoute'))


//port
const PORT=8080||process.env.PORT;

//listen server
app.listen(PORT,(req,res)=>{
    console.log(`server chal rha hai re baba ${PORT}`);
});