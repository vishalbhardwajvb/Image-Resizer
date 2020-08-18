const jwt=require('jsonwebtoken'); //Include the jsonwebtoken library


module.exports =(req,res,next)=>{


    try
    {
        let token=req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token ,"secretkey");//It will check this is a valid user or not  and decode it information
        next();
    }
    catch(error){

            //It will return this mesg when some try to access without LOGIN IN
            return res.status(401).json({
                message:"UnAuthorized Access You need to login First "
            });

    }    

}