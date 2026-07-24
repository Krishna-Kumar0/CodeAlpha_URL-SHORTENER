import mongoose from 'mongoose';
const urlSchema = new mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
        unique:true
        },
    longUrl:{
        type:String,
        required:true

    },
    visitHistory:[{timestamp: {type:Number} }],
    } ,
    {timestamps:true}
);
const URL=mongoose.model('URL',urlSchema);
export default URL;