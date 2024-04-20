import mongoose from 'mongoose';
// import  { ATLAS_URI} from '../config/serverConfig'

export default async function connect(){
   await mongoose.connect(process.env.ATLAS_URI);
   console.log('connected to mongoDB');
}



