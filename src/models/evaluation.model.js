const mongoose=require("mongoose");

const evaluationSchema=new mongoose.Schema(
    {
        dateOfEvaluation:{type:Date,required:true},
        instructor:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
        batchID:{type:mongoose.Schema.Types.ObjectId,ref:"Batch",required:true}

    },
    {
        timestamps:true
    }
)

const Evaluation=mongoose.model("evaluation",evaluationSchema);

module.exports=Evaluation