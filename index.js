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
       // console.log("ok")
        // const posted={
        //     googleid:"129",
        //     name:"name"
        // }
        const result=await Song.find()
        
        //const matching_songs

        res.json({result})
    }
    catch(err){
        console.log(err)
    }
})
app.get('/songs/bringsearchsongsbyname/',authenticate,async(req,res)=>{
    try{
        console.log("backed_bringsearch")
        const result=await Song.find()
        console.log("print",req.query.search_string)
        const return_array=[]
        //if(req.query.search_string==="")return res.json({})
        for(let i=0;i<result.length;i++){
            if(result[i].songname.substr(0,req.query.search_string.length)===req.query.search_string){
                return_array.push(result[i])
            }
        }

        //console.log(typeof return_array)
        res.json({return_array})
    }
    catch(err){
        console.log(err)
    }
})

app.get('/songs/bringsearchsongsbytags/',authenticate,async(req,res)=>{
    try{
        console.log("tagsearch")
        const result=await Song.find()
       // console.log("print",req.query.search_string)
        const return_array=[]
        //console.log(result[0].tags)
        console.log(result)
        for(let i=0;i<result.length;i++){
            //all_tags has array of tags
            var all_tags=await result[i].tags.substr(1,result[i].tags.length-2).split(',')
            for(let j=0;j<all_tags.length;j++){

                if(all_tags[j].substr(1,all_tags[j].length-2).substr(0,req.query.search_string.length)===req.query.search_string){
                    return_array.push(result[i])
                    console.log(all_tags[j].length)
                    console.log(all_tags[j].substr(1,all_tags[j].length-2).substr(0,req.query.search_string.length)," ",req.query.search_string)
                    break;
                }
            }
 
        }

        
        //console.log(typeof return_array)
        res.json({return_array})
    }
    catch(err){
        console.log(err)
    }
})

app.get('/songs/load_recommendations/',authenticate,async(req,res)=>{
    try{
        console.log("hey")

        //const result=await Song.findOne({name:req.query.search_string})
        const result=await Song.findOne({name:req.query.search_string})
        //console.log(result.recommendations)
        var str=result.recommendations.substr(1,result.recommendations.length-2)
        //ar is all recommendations in a array
        var recomm=str.split(', ')
        
        for(let i=0;i<recomm.length;i++){
            recomm[i]=recomm[i].substr(1,recomm[i].length-2)
        }
        console.log("str", recomm)
        var rec_obj=await Song.find({name: {$in :recomm}})
        console.log(rec_obj)
        res.json({rec_obj}) 
        
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

