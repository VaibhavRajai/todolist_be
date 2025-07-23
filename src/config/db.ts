import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI  ||'mongodb+srv://rajaivaibhav11:PUZE0ba00lo24OP0@cluster0.yduomi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' );
        console.log('Db connected')
    }catch(error){
        console.log(error)
    }
}
export default connectDB;