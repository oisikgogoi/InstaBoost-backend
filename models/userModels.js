const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    user_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,'please enter the username'],
      
    },
    password:{
        type:String,
        required:[true,'please enter the username']
    }
})

module.exports = mongoose.model('Data',userSchema)