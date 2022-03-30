
const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://Ayaz_Ahmad:AYAZisLUCKY@cluster0.sxbry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports=connect;