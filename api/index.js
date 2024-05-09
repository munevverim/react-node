const express =require("express");
const dotenv=require("dotenv");
const products=require("./data/Products");

dotenv.config();

const app =express();
const PORT=process.env.PORT;
const mongoose=require("mongoose");

mongoose.connect(process.env.MONGOOSE).then(()=>console.log("db connected")).then(err)=>{
    err;
}

const databaseSeeder =require('./databaseSeeder')

//database seeder

app.use('./api/seed',)

app.get("/api/products",(req,res)=>{
    const products=products;

    res.json(products);
});
app.get((req,res)=>{
    const product=products.find((product)=>product.id==req.params.id)

    res.json(products);
});


app.listen(PORT || 9000,()=>{
    console.log(`Server is running on port ${PORT}`);
})