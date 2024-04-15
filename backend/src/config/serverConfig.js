const dotenv=require('dotenv');

dotenv.config();

module.exports = {
    PORT:process.env.PORT || 3000,
    ATLAS_URI:process.env.ATLAS_URI,
};