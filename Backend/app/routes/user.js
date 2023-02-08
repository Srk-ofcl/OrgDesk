const express = require('express')
const app = express();
const router = express.Router()
const { get_homeData } = require('../controller/home')
const auth = require('../../app/middleware/auth');
const { get_Login, get_Register } = require('../../app/controller/UserController')


router.get('/', get_homeData);
router.post("/login", get_Login);
router.post("/register", get_Register);

router.get("/profile", auth,(req,res)=>{
    res.send("User Profile")
})
module.exports=router;