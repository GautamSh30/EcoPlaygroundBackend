import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    lessons:{type:Array,default:[]},
},{timestamps:true});

export default mongoose.model('Lesson',lessonSchema);