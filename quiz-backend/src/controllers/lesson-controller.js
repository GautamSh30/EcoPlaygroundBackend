import Lesson from '../models/lessonSchema.js';
import lessons from '../database/lesson-data.js';

export async function getLessons(req,res){
   try{
    const l= await Lesson.find();
    res.json(l);
   }catch(error){
        res.json(error); 
   }
}

export async function insertLessons(req,res){
   try{
    Lesson.insertMany({lessons:lessons},
        res.json({msg:"Data Saved Successfully!"})
    );
   }catch(error){
    res.json({error});
   }
}

export async function dropLessons(req,res){
   try{
    await Lesson.deleteMany();
    res.json({msg:"Data Deleted Successfully!"});
   }catch(error){
    res.json({error});
   }
}



// export async function storeResult (req,res){
//    try{
//    const {username,result,attempts,points,acheived} = req.body;
//    if(!username && !result) throw new Error("Data not provided");
//    }catch(error){
//     res.json({error});
//    }
// }


    

