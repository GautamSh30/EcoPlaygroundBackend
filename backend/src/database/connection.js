const mongoose = require('mongoose');
const { ATLAS_URI } = require('../config/serverConfig');

const connect= async ()=>{
   await mongoose.connect(ATLAS_URI);
   console.log('connected to mongoDB');
}

module.exports = connect;