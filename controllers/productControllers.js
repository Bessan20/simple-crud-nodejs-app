
const Product = require('../models/productModels.js');

//@desc     Get list of all products
//@route    GET /api/products
//@access   public
exports.getProducts = (async(req,res)=>{

    try {

        const products = await Product.find({});
        res.status(200).json(products);

    }
    catch(error){
        res.status(500).json({message : error.messaga});
    }


});


//@desc     Get specific product by id
//@route    GET /api/products/:id
//@access   public
exports.getProductById = (async(req,res)=>{

    console.log(req.params.id);
    try{

        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }

    catch (error) {
        res.status(500).json({message : error.message});
    }
});


//@desc     Get specific product by name
//@route    GET /api/products/:id
//@access   public
/*exports.getProductByName = (async(req,res)=>{

    console.log(req.params.name);
    try{

        const { name } = req.params;
        const product = await Product.find({name});
        res.status(200).json(product);
    }

    catch (error) {
        res.status(500).json({message : error.message});
    }
});*/

//@desc     Get specific product by price
//@route    GET /api/products/:price
//@access   public
/*exports.getProductByPrice = (async(req,res)=>{

    try {

        const {price} = req.params;
        const product = await Product.find({price});
        res.status(200).json(product);
    }

    catch(error) {

        res.status(500).json({message : error.message});
    }
});*/


//@desc     Get specific product by quantity
//@route    GET /api/products/:quantity
//@access   public
/*exports.getProductByQuantity = (async(req,res)=>{

    try{

        const {quantity} = req.params;
        const product = await Product.find({quantity});
        res.status(200).json(product);
    }

    catch (error) {
        res.status(500).json({message: error.message});
    }
});*/


//@desc     Create product
//@route    POST /api/products
//@access   private
exports.createProduct = (async(req,res)=>{
    
    try{

        const product = await Product.create(req.body);
        res.status(200).send(product);

    }

    catch (error){
        res.status(500).json({messaga : error.message});
    }
});


//@desc     update specific product by id
//@route    UPDATE /api/products/:id
//@access   private
exports.updateProduct = (async(req,res)=>{
    
    
    try {

        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
           return  res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
                
    }

    catch (error) {
        res.status(500).json({message : error.message});
    }
});


//@desc     delete specific product by id
//@route    DELETE /api/products/:id
//@access   private
exports.deleteProduct = (async(req,res)=>{
    
    
    try {

        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
           return  res.status(404).json({message: "Product not found"});
        }
        res.status(200).send("one element is deleted");
                
    }

    catch (error) {
        res.status(500).json({message : error.message});
    }
});





