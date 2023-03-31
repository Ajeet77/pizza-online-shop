const mongoose = require('mongoose');
require('colors')

const connectDB = async ()=>{
    try{
        const url = process.env.MONGO_URI;
        const conn = await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            // useCreateIndex:true
        })
        console.log(`MongoDB is connected! ${conn.connection.host}`.bgCyan.black);
    } catch(err){
        console.log(`Error ${err.message}`.bgRed.white);
    }
}

module.exports = connectDB;