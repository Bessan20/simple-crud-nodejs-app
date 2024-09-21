const mongoose = require('mongoose');//import mongoose module


//create schema
const productSchema = mongoose.Schema(
    {
        name : {
            
            type : String,
            required : [true , "please enter product name"]
        },

        quantity : {
            
            type : Number,
            required : true,
            default : 0
        },

        price : {

            type : Number,
            required : true,
            default : 0
        },

        image : {

            type : String,
            required : false
        },
    },
    
    {
    timestamps : true
    }
);

//create model
const product = mongoose.model("Product",productSchema);

module.exports = product;