const express=require('express');
const { models } = require('mongoose');
const router=express();
const {userById}=require("../controllers/user")
const {requireSignin,isAuth, isAdmin}=require("../controllers/auth")
router.get('/secret/:userId',requireSignin, isAuth,isAdmin, (req,res) => {
    res.json({
        user: req.profile
    });
})
router.param('userId',userById);
module.exports=router;