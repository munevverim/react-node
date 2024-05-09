const router=require(router);
const User=require('/models/User');
const users =require('./data/Users');
const products = require('./data/Products');
const Product=require('./models/Product');
const AsynHandler=require('express-async-handler')

router.post('/users',async(req,res)=>{
    await User.deleteMany({});
    const UserSeeder=await User.insertMany(users);
    res.send({UserSeeder})

});

router.post('/products',async(req,res)=>{
    await Product.deleteMany({});
    const ProductSeeder=await Product.insertMany(products);
    res.send({ProductSeeder})

});
module.exports=router;

