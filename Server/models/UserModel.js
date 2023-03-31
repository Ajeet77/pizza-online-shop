const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name :{
        type:String,
        require : [true, 'Name is require']
    },
    email : {
        type:String,
        require:[true, 'Email is require']
    }, 
    password:{
        type:String,
        require:[true, 'Password is require']
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
},{timeStamps:true})

module.exports = mongoose.model('user', userSchema)