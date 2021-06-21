const express =require('express')

const mongoose = require('mongoose')
require('dotenv').config({path:'./config/config.env'})


const connectDB = require('./config/db')
connectDB()
const Song=require('./models/Song');

// const SongSchema=new mongoose.Schema({
//     googleid:{
//         type:String,
//         required:true
//     },
//     name:{
//         type:String,
//         required:true
//     }
// })

//mongoose.model("test",SongSchema)

//const test=mongoose.model('test')
const app =express()



app.use(express.json())
app.use(express.urlencoded({extended:false}))

//app.use('/auth')

app.get('/users',async(req,res)=>{
    try{
        console.log("ok")
        const posted={
            googleid:"129",
            name:"name"
        }
        const result=await Song.find()
        console.log(result)
        res.json({result})
    }
    catch(err){
        console.log(err)
    }
})

app.get('/songs',(req,res)=>{

})

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

