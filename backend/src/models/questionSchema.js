import mongoose from 'mongoose';   

// Question Model

const questionSchema = new mongoose.Schema({
    questions:{type:Array,default:[]},
},{timestamps:true});

export default mongoose.model('Question',questionSchema);

