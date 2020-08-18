const express=require('express');
const Router=express.Router();

const Controllers=require('../controllers/controllers');//Importing The controller file  which having Resizer function which resize the given image
const CheckAuth=require('../controllers/Auth');         //Importing the Auth controller file help in Authentication of the User Request 

Router.use('/login',require('./Auth'));                // This Route which help in User Authentication and return a token 


Router.use('/upload',CheckAuth,require('./upload'));   // This Route handle the request of Downloading the image from URL
                                                        // And Only the Authenticated user can access this route
                                                        
Router.get('/return/:image_name',CheckAuth,Controllers.Resizer);  //After Download The image this route responsible for resizing the image


module.exports=Router;