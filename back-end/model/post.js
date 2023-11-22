const mongoose  = require("mongoose");

const postSchema = new mongoose.Schema({
   
   title:{
    type: String,
    max: 200,
    min:2,
    required: true
},
imgUrl:{
    type: String,
    max: 100,
    min:2,
    required: true
},
userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
description:{
    type: String,
    max: 1000,
    min:2,
    required: true
},
author:{
    type: String,
    max: 100,
    min:2,
    required: true
},
data:{
    type: Date,
    default: Date.now(),
}
})


module.exports= mongoose.model('Post', postSchema)




