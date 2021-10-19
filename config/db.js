const mongoose=require('mongoose')

const connectDB = async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
    
    console.log(`MongoDB COnnected:${conn.connection.host}`)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
    //console.log(process.env.MONGO_URI,process.env.LOL)
}


module.exports=connectDB