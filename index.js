

// This is a Image Resizer API IN NODE JS By Using Express


const express=require('express');                                    //   Importing the Express Library
const port=8000;                                                     //   Port Number On Which Server Will RUN
const app=express();                                                 //   Creating The Express Object


app.use(express.urlencoded());                                       //   When The Post Request send 
app.use('/',require('./routes/index_routes'));                       //   When the 



app.listen(port,(err)=>{                          // Start the sever and Check Weather the server is running or not   
    if(err)
    {
        console.log(err);
    }
    console.log('SERVER START SUCCESSFULLY');
});