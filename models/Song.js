const mongoose=require('mongoose')

const SongSchema=new mongoose.Schema({
    googleid:{
        type:String,
    },
    name:{
        type:String,
    }
})

module.exports=Song=mongoose.model("Song",SongSchema)