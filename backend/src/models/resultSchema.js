import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
    username:{type:String},
    result:{type:Array,default:[]},
    attempts:{type:Number,default:0},
    points:{type:Number,default:0},
    acheived:{type:String,default:''},

},{timestamps:true});

export default  mongoose.model('Result',resultSchema);


