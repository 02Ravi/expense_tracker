const express=require('express')
const { loginController, registerController } = require('../controllers/userController')

const router=express.Router()

//routers
//post||login
router.post('/login',loginController)

//post||reg
router.post('/register',registerController)
module.exports=router