const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const User=require('./models/User')
//const Song=require('./models/Song')

module.exports= (req,res,next)=>{
    try{
        const {authorization}=req.headers

        if(!authorization){
            return res.status(401).json({error:"you must be logged in"})
        }
        const token= authorization.replace("Bearer ","")
        jwt.verify(token,process.env.JWT_SECRET,async (err,payload)=>{
            if(err){
                //console.log(err)
                return res.status(401).json({error:"you must be logged in"})

            }
            const {id}=payload
            const user=await User.findById(id)
            req.user=user
            next()
        })
        //console.log(s)
    }
    catch(err){
        console.log(err)
    }

}