
import mongoose from 'mongoose'

  export async function connectDB(){

    try{
     await mongoose.connect(process.env.MONGODB_URL)
     console.log("MongoDB successFully connected.")

    }catch(error){
        console.error("MongoDB connection error:", error.message);
        process.exit(1)
    }
}



