const express=require("express")


const usercontroller=require("./controllers/user.controller")
const studentcontroller=require("./controllers/student.controller")
const batchcontroller=require("./controllers/batch.controller")
const evaluationcontroller=require("./controllers/evaluation.controller")
const submissioncontroller=require("./controllers/submission.controller")

const app=express();

app.use(express.json())

app.use("/user",usercontroller)
app.use("/student",studentcontroller)
app.use("/batch",batchcontroller)
app.use("/evaluation",evaluationcontroller)
app.use("/submission",submissioncontroller)

module.exports=app