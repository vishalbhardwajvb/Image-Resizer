var Resizer=require('node-image-resizer');  // include the library which help in rezing the image
const path=require('path');


module.exports.Resizer=(req,res)=>
{


    const setup = {        //This is simple config which decide the size, name and the location where resized image will save
        all: {
          path: path.join(__dirname,'../Resized_Images/'),  //where the image will save
          quality: 100
        },
        versions: [{
            quality: 100,
            prefix: 'Resize_',
            width: 50,        //width  of resized the image in pixels
            height: 50        //height of resized the image in pixels
          }]
      };




      try{
        
        //    this function start the resizing of the image ,it take images from Original_images folder with setup congif which mentioned above
        Resizer(path.join(__dirname,'../Original_Images/'+req.params.image_name), setup);


        //return the thumbnail wait for Conversion of Image for few seconds
        return setTimeout(()=>{res.sendFile(path.join(__dirname,'../Resized_Images/Resize_'+req.params.image_name))},4000);
      }
      catch(error)
      {
          return res.json({
              message:"Please check your Dependencies"
          })
      }
}