const mongoose= require("mongoose");
const userschema = new mongoose.Schema({
    name:{
        type: String,
        required:true

    },
    majorcrop:{
        type: String,
        required:true

    },
    speciality:{
        type: String,
        required:true

    },
    
})

const User = mongoose.model('USER',userschema);
module.exports= User;
