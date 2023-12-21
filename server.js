//jshint esversion:6
const express = require('express')
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/errorHandler.js')
const User = require('./models/userModels.js')
require('dotenv').config()
const port = process.env.PORT || 5001
const cors = require('cors');

const compression = require('compression')


try{
    mongoose.connect(process.env.MONGO_URL)
    console.log("MONGO DB CONNECTED")
}catch(err){
    console.log(err)
}

const app = express()
app.use(cors());

app.use(compression({
    level:7
}))

app.use(express.json())


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})

app.post('/',async (req,res)=>{
    const {email , password , user_id } = req.body


    if(!email || !password){
        return res.status(400).json({msg:'all the fields are necessary', success:false})
    }

    try{
        const user = await User.create({
            email,
            password,
            user_id
        })
    res.status(200).json({msg:'created',success:true ,  data:user })

    }catch(err){
        res.status(500).json({msg:err.message, success:false})
    }

})

app.use((req,res,next)=>{
    return res.status(404).send('404 not found')
})

app.use(errorHandler) 
