const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongoose.model('users',ProductSchema);



