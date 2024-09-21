const dotenv = require('dotenv');//import dotenv module
const morgan = require('morgan');//import morgan module(middleware)
const experss = require('express');//import express module



const app = experss();//create app from express function
dotenv.config({path:'config.env'});

//connect to database
const dbConnection = require('./config/database.js');
dbConnection();
    
//middlewares   --->  middlewares before routes
app.use(experss.json());//parsing data(json) that pass as a string and translate it as javascript object
app.use(experss.urlencoded({extended: false}));
if(process.env.NODE_ENV === "development"){

    app.use(morgan("dev")); //return (http verb) (url) (status code) (response time)
    console.log(`mode : ${process.env.NODE_ENV}`);
}


const productRoute = require('./routes/productRoute.js');
app.use('/api/products',productRoute);
const PORT = process.env.PORT || 3000;
app.listen((PORT) , () => {console.log(`listening to port ${PORT} ....`)});
