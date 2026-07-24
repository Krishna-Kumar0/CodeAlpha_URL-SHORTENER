import mongoose from"mongoose";
export default async function connectMongoDb(url){
try{
    await mongoose.connect(url);
    console.log("Connected to mongodb");
}
catch(err){
    console.log("Error connecting to mongodb",err);
    throw err;
}
} 