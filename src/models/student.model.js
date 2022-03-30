const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema(
    {
        rollid:{type:String,required:true},
        currentbatch:{type:String,required:true},
        

    },
    {
        timestamps:true
    }
)

const Student=mongoose.model("Student",studentSchema);

module.exports=Student
