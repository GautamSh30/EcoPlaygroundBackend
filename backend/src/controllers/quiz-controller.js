import  Question from  '../models/questionSchema.js';
import Result from '../models/resultSchema.js';
import {questions } from '../db/data.js';
export async function getQuestions(req,res){
   try{
    const q= await Question.find();
    res.json(q);
   }catch(error){
        res.json(error); 
   }
}

export async function insertQuestions(req,res){
   try{
    Question.insertMany({questions:questions},
        res.json({msg:"Data Saved Successfully!"})
    );
   }catch(error){
    res.json({error});
   }
}

export async function dropQuestions(req,res){
   try{
    await Question.deleteMany();
    res.json({msg:"Data Deleted Successfully!"});
   }catch(error){
    res.json({error});
   }
}

export async function getResult(req,res){
   try{
    const result = await Result.find();    
    res.json(result);
   }catch(error){
        res.json({error});
   }
}

export async function storeResult (req,res){
   try{
   const {username,result,attempts,points,acheived} = req.body;
   if(!username && !result) throw new Error("Data not provided");
   }catch(error){
    res.json({error});
   }
}

export async function dropResult (req,res){
    try{
        await Result.deleteMany();
        res.json({msg:"Result deleted Successfully"});
    }catch(error){
        res.json({error});
    }
}
    

