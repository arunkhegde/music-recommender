const mongoose=require('mongoose')

const SongSchema=new mongoose.Schema({
    googleid:{
        type:String,
    },
    name:{
        type:String,
    },
    songname:{
        type:String,
    },
    recommendations:String,
    tags:String
})

module.exports=Song=mongoose.model("Song",SongSchema)