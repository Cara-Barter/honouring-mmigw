const express = require('express');
const app = express();
require('dotenv').config();
const { PORT } = process.env;

//add middleware
app.use(express.json());
app.use(express.static('public'));

//use routes

//start server
app.listen(PORT, function() {
    console.log(`server is running on ${PORT}`);
});  
  
  
  
  
