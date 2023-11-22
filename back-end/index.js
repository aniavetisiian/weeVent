const express = require('express')
const cors = require('cors')
const  bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express() 
app.use(cors())
app.use(bodyParser.json())


mongoose.connect('mongodb+srv://tumo:tumo1234@cluster0-ilufc.mongodb.net/myDB?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  },

()=> {
    console.log('Connect to DB');
})

const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')


app.use('/posts',postRoute)
app.use('/user/auth', authRoute)




app.listen(3000,()=> {
    console.log('I am running');
})
