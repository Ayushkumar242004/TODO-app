const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ayukumar242004:vBMVWhazviHz0UjJ@cluster0.vuoaaxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   .then(() => console.log("Connected to MongoDB"))
  
  
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}


//mongodb+srv://ayukumar242004:vBMVWhazviHz0UjJ@cluster0.vuoaaxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0