const express=require('express')
const router =express.Router()
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const Song=require('../models/Song');
const User=require('../models/User');
const authenticate = require('../authenticate')

const JWT_SECRET=process.env.JWT_SECRET

router.get('/',(req,res)=>{
    res.send("Hello")
})

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"please add all fields"})
    }
    const signup=async()=>{
        try{
            savedUser=await User.findOne({email:email})
            if(savedUser){
                return res.status(422).json({error:"user already exists"})
            }
            const hash=await bcrypt.hash(password, 10)
            const user={
                name,
                email,
                password:hash,
            }
            await User.create(user)
            res.json({message:"signned up"})
        }
        catch(err){
            console.log(err)
        }
    }
    signup()

})


router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password)
        return res.status(422).json({error:"please add all category"})
    const signin=async()=>{
        try{
            const user=await User.findOne({email:email})
            if(!user){
                console.log('lol')
                return res.status(422).json({error:"email not registered "})
            }
            const comp=await bcrypt.compare(password,user.password)
            if(comp){
                //res.json({message:"signned in"})
                const token=jwt.sign({id:user.id},JWT_SECRET)
                const {id,name,email,pic,followers,following}=user
                res.json({token,user:{id,name,email}})
            }
            else{
                res.status(422).json({error:"wrong password"})
            }
        }
        catch(err){
            console.log(err)
        }

    }
    signin()
})

module.exports=router