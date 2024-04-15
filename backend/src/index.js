const express = require('express');
const morgan= require ('morgan');
const  cors =require('cors');
const {PORT} =require('./config/serverConfig');
const connect = require('./database/connection');
const router = require('./routes/index');
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

// routes
app.use('/Quizapi',router);

app.get('/',(req,res)=>{
    try{
        res.json("get request");  
    }catch(error){
        res.json(error);
    }
})

// start server only when we have valid connection
connect().then(()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Server Connected to PORT: ${PORT}`);
        })
    }catch(error){
        console.log("Cannot connect to the server"); 
    }
}).catch(error=>{
    console.log("Invalid db connection"); 
});

