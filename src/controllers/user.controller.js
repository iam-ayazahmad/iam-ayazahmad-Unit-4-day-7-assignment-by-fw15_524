const express = require("express");

const User = require("../models/user.model");

const app=express()

app.post("",async(req,res)=>{
    try{
        const user=await User.create(req.body)
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})
app.get("",async(req,res)=>{
    try{
        const user=await User.find({}).lean().exec()
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})

module.exports=app