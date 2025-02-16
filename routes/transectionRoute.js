const express=require('express');
const {  addTransection, getALLtransection,editTransection ,deleteTransection} = require('../controllers/transectionctrl');

const router=express.Router();

//routes
//add tran post
router.post('/add-transection',addTransection)

router.post('/edit-transection',editTransection)
router.post("/delete-transection", deleteTransection);

//get
//sare tran get kro
router.post('/get-transection',getALLtransection);

module.exports=router;