const mongoose=requir("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.userSchema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        isAdmin:{
            type:Boolean,
            default:false,
        },
        
},
{timestamps:true}
)
module.exports=mongoose.model("User",userSchema);

