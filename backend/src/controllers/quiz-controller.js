const  Question  = require('../models/questionSchema');
const {questions,answers}= require('../database/data');
const getQuestions = async (req,res)=>{
   try{
    const q= await Question.find();
    res.json(q);
   }catch(error){
        res.json(error); 
   }
}

const insertQuestions = async (req,res)=>{
   try{
    Question.insertMany({questions:questions,answers:answers},
        res.json({msg:"Data Saved Successfully!"})
    );
   }catch(error){
    res.json({error});
   }
}

const dropQuestions = async (req,res)=>{
   try{
    await Question.deleteMany();
    res.json({msg:"Data Deleted Successfully!"});
   }catch(error){
    res.json({error});
   }
}

const getResult = async (req,res)=>{
   try{
    const result = await Results.find();    
    res.json(result);
   }catch(error){
        res.json({error});
   }
}

const storeResult = async (req,res)=>{
   try{
   const {username,result,attempts,points,acheived} = req.body;
   if(!username && !result) throw new Error("Data not provided");
   }catch(error){
    res.json({error});
   }
}

const dropResult = async (req,res)=>{
    try{
        await Result.deleteMany();
        res.json({msg:"Result deleted Successfully"});
    }catch(error){
        res.json({error});
    }
}
    

module.exports = {
    getQuestions,
    insertQuestions,
    dropQuestions,
    getResult,
    storeResult,
    dropResult,
}