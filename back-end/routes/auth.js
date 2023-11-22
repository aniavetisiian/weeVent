const router = require('express').Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken')
router.post('/signin', async (req,res)=> {
    const emailExists = await User.findOne({emai: req.body.email })
   if(!emailExists){
    res.status(400).send('Please register')
    return
}
   if(req.body.password != emailExists.password){
    res.status(400).send('Password is wrong')
    return
   }
  const token = jwt.sign({ id: emailExists._id }, 'fhgjhgj');
   res.send({auth_token: token})
})

router.get('/signup',async (req,res)=> {
   const emailExists = await User.findOne({emai: req.body.email })
   if(emailExists){
       res.status(400).send('Email already exists')
   }
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const data =  await user.save()
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})




module.exports = router