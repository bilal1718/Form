const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/register');

const app=express();
app.use(cors());
  
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/form');

app.post('/formik',( req, res ) => {
    const {name,email,password}=req.body;
    RegisterModel.findOne({email:email})
    .then(user => {
        if(user){
            res.json("Already have an account")
        }else{
            RegisterModel.create({name:name,email:email,password:password})
            .then(result => res.json("Account Created"))
            .catch(err => res.json("Error"))
        }
    }).catch(err => res.json(err))
})


app.listen(3164
    ,()=>{
    console.log("Server is running")
})