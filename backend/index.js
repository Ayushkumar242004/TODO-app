const express=require("express");
const {createTodo,updateTodo} =require('./types')

const {todo} =require('./db')
const cors=require("cors")
const app=express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){//add something
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload)
        {
            res.status(411).json({
                msg:"You sent the wrong inputs"
            })
            return ;
        }
    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed:false
    })

    res.json({
        msg:"Todo created successfully"
    })
})

app.get("/todos",async function(req,res){//get all
    
    const todos=await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){//update
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);

    if(!parsePayload)
        {
            res.status(411).json({
                msg:"You sent the wrong inputs"
            })
        }
        return ;

        await todo.update({
            _id:req.body.id
        },{
            completed:true
        })

        res.json({
            msg:"Todo marked as completed"
        })
})

app.listen(3000)