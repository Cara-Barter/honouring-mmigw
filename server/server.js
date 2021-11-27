const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const participantsRoutes = require('./routes/participants')
const { PORT } = process.env || 5000;

//add middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//use routes
app.use('/participants', participantsRoutes);

//start server
app.listen(PORT, function() {
    console.log(`server is running on ${PORT}`);
});  
  
  
  
  
