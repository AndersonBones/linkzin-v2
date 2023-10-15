import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    code:{type:String, required:true},
    url:{type:String, required:true},
    click:{type:Number, default:0}
})


export default mongoose.model('link', urlSchema)