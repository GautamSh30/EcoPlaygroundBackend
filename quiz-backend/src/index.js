import express from 'express';
import dotenv from 'dotenv';
// const morgan= require ('morgan');
import cors from 'cors';
// import {PORT} from './config/serverConfig';
import connect from './database/connection.js';
import router from './routes/index.js';
const app = express();


dotenv.config(
    {
        path: "./.env"
    }
);

// app.use(morgan('tiny'));
app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
  })
  );
app.use(express.json());

// routes
app.use('/api/v1',router);

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
        app.listen(process.env.PORT,()=>{
            console.log(`Server Connected to PORT: ${process.env.PORT}`);
        })
    }catch(error){
        console.log("Cannot connect to the server"); 
    }
}).catch(error=>{
    console.log("Invalid db connection"); 
});

