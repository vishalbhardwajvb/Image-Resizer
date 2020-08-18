var express = require('express');
var Router=express.Router();   // Create Router Object to handle the upcoming Request From Server File[index.js]
var path=require('path');
const {DownloaderHelper}=require('node-downloader-helper');
                              //Including only The Class Which helps Us to Download the image From URL which is Entered By  

 
Router.post('/',function (req, res) {

     const Download=new DownloaderHelper(req.body.path,path.join(__dirname,'../Original_Images'));
       //Here We set the path of the image when Image completely Download it will save in Original_Image Folder

     let image_name=Download.url.split('/');  //With The Help of this we can get the name of the image present the the given URL
     image_name=image_name[image_name.length-1];
    
            Download.start();                //This Function start Downloading the Image From the given URL

            Download.on('end',()=>{          //When Download will Completed This function Execute

              return res.redirect('/return/'+image_name);


            });     
});

module.exports=Router;        //Exporting the  Router From this Modules



