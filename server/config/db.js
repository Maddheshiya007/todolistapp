import mongoose  from "mongoose";
const connectToMongo = async ()=>{
    // const res =  await mongoose.connect(`mongodb://localhost:27017/todoapp`)
    const res =  await mongoose.connect(`${process.env.MONGO_DB_URL}`)
    res && console.log('connected to MongoDB')
}
export default connectToMongo;


