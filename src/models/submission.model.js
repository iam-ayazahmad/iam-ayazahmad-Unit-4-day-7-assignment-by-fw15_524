const mongoose=require("mongoose");

const submissionSchema=new mongoose.Schema(
    {
        evaluationID:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation",required:true},
        studentID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
        marks:{type:Number,required:true}

    },
    {
        timestamps:true
    }
)

const Submission=mongoose.model("submission",submissionSchema);

module.exports=Submission