const express = require("express");

const Submission = require("../models/submission.model");

const app=express()

app.post("",async(req,res)=>{
    try{
        const user=await Submission.create(req.body)
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})
app.get("",async(req,res)=>{
    try{
        const user=await Submission.find({}).populate({path:"evaluationID",select:{marks:1}}).lean().exec()
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})

module.exports=app