const express=require("express");
require("./db/config");
const test=require("./db/user")
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,resp)=>
{
    resp.json("hello");
})
app.post("/login",async(req,resp)=>
{
    let data=new test(req.body);
    let result=await data.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);

})

app.post("/check", (req,resp)=>
{

    const {email,password}=req.body;
     test.findOne({email:email, password : password})
    .then(user=>{
        if(user)
        {
            resp.send(user);
            // if(user.password === password)
            // {
            //     resp.send(user);
            // }
            // else{
            //     resp.send({user:"Incorrect Password"});
            // }
        }
        else{
            resp.send({user:"No record Exist"});
        }
    })
    // if(req.body.email && req.body.password)
    // {
    //     let user=await test.findOne(req.body);
    //     if(user)
    //     {
    //         resp.send(user);

    //     }
    //     else{
    //         resp.send({result:"no user found"});
    //     }
    
    // }
    // else{
    //     resp.send({result:"no user found"});
    // }

})


app.listen(5000 , ()=>
{
    console.log("good");
});