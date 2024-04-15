const mongoose = require('mongoose');   

// Question Model

const questionSchema = new mongoose.Schema({
    questions:{type:Array,default:[]},
    answers:{type:Array,default:[]},
},{timestamps:true});

const Question = mongoose.model('Question',questionSchema);

module.exports = Question ;