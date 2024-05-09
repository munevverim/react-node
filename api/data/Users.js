const bcrypt=require("bcrypt");
const users=[
    {
        name:"Admin",
        email:"admin@gmail.com",
        password:"123456",
        isAdmin:true,
    },
    {
        name:"User",
        email:"user@node.com",
        password:bcrypt.hashSync("123456",10),
    }   


]