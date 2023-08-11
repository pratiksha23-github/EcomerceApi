// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initializing express
const app = express();
const port = 8000;

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));


app.listen(process.env.PORT || port, function(){
    console.log('API is live on http://localhost:8000/products');
});

// app.listen(8000, function(){
//     console.log('API is live on http://localhost:8000/products');
// });