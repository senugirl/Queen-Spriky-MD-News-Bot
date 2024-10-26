const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '6Z13iKiS#WBniujZlLQWjt_X7eMavvwO8nrInuGLSIe7l85tJb8k', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:qHZlluonvtEuUHEjOpFCnXOyTHWuHoNp@autorack.proxy.rlwy.net:23669',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94766950645',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94766950645'    // Enter Your Bot Number
};
