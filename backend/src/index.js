const express = require('express');
const morgan= require ('morgan');
const  cors =require('cors');
const {PORT} =require('./config/serverConfig');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
// routes

app.get('/',(req,res)=>{
    try{
      res.json("get request");  
    }catch(error){
        res.json(error);
    }
})

app.listen(PORT,()=>{
    console.log(`Server Connected to PORT: ${PORT}`);
})