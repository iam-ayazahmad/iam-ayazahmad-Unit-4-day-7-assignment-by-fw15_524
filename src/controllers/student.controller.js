const express = require("express");

const Student = require("../models/student.model");

const app=express()

app.post("",async(req,res)=>{
    try{
        const user=await Student.create(req.body)
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})
app.get("",async(req,res)=>{
    try{
        const user=await Student.find({}).lean().exec()
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(200).send(err.mesaage)
    }
})

module.exports=app