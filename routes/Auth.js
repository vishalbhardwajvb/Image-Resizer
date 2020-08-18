const express = require('express');
const Router=express.Router();
const jwt=require('jsonwebtoken');

Router.post('/',function(req,res){


    //It will logged in the user with the enterd Username and password 
      const token=jwt.sign(
            {
                username:req.body.username,
                passoword:req.body.password,         
            }
            ,"secretkey",  //Here You can provide the username Secretkey which is prent on the serve
            {
                expiresIn:"1h"  //Till what time this jwt token will exist 
            }
        );

        return res.status(200).json({
            message:"Login SUCCESSFULL",
            username:req.body.username,
            token:token                     //It will return the token to the User for accessing the future Request
        });
});

module.exports=Router;