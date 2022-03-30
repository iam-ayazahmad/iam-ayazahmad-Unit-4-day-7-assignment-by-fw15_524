const express = require("express");

const Evaluation = require("../models/evaluation.model");

const app=express()

app.post("",async(req,res)=>{
    try{
        const user=await Evaluation.create(req.body)
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})
app.get("",async(req,res)=>{
    try{
    const user=await Evaluation.find({}).populate({path:"instructor",select:{firstName:1}}).lean().exec()
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})

module.exports=app