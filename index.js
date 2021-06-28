const express =require('express')
const app =express()
const mongoose = require('mongoose')
require('dotenv').config({path:'./config/config.env'})
const authenticate=require('./authenticate')
const Song=require('./models/Song');


const connectDB = require('./config/db')
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//app.use('/auth')

app.get('/songs',authenticate,async(req,res)=>{
    try{
        console.log("ok")
        // const posted={
        //     googleid:"129",
        //     name:"name"
        // }
        const result=await Song.find()
        console.log(result)
        res.json({result})
    }
    catch(err){
        console.log(err)
    }
})

app.get('/ok',authenticate,async(err,res)=>{
    res.json({message:"done"})
})

app.use('/',require('./routes/auth'))

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

