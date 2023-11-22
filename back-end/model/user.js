const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
   
   username:{
    type: String,
    max: 100,
    min:2,
    required: true
},
email:{
    type: String,
    max: 100,
    min:2,
    required: true
},
password:{
    type: String,
    max: 1000,
    min:2,
    required: true
},
data:{
    type: Date,
    default: Date.now(),
}
})


module.exports= mongoose.model('User', userSchema)




