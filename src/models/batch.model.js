const mongoose=require("mongoose");

const batchSchema=new mongoose.Schema(
    {
        batchName:{type:String,required:true},
        
        

    },
    {
        timestamps:true
    }
)

const Batch=mongoose.model("Batch",batchSchema);

module.exports=Batch
