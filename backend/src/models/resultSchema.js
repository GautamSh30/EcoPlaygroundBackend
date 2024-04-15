const mongoose =require('mongoose');

const resultSchema = new mongoose.Schema({
    username:{type:String},
    result:{type:Array,default:[]},
    attempts:{type:Number,default:0},
    points:{type:Number,default:0},
    acheived:{type:String,default:''},

},{timestamps:true});

const Result = mongoose.model('Result',resultSchema);

module.exports = Result ;