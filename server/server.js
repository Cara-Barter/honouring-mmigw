require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const knex = require('knex')(require('./knexfile').development);
const participantsRoutes = require('./routes/participants');
const honouringRoutes = require('./routes/honouring');

//add middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//TODO store users on DB
const users = [
    {
        username: 'Cara',
        name: 'Cara',
        password: 'mmiwg'
    }
];

const authorize = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).json({message: 'No token found'})
    }
    const authTokenArray = req.headers.authorization.split(' ');
    if (authTokenArray[0].toLowerCase() !== 'bearer' && authTokenArray.length !== 2) {
      return res.status(401).json({message: 'Invalid token'});
    }
  
    jwt.verify(authTokenArray[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({message: 'The token is expired or invalid'});
      }
      req.payload = decoded;
      next();
    });
}

app.post('/login', (req, res) => {
  console.log('in login', req.body);
  //console.log(req.params)
  //TODO add knex
  knex.from('admin')
    .select('username', 'password')
    .then((data) => {
      console.log(data);
    const { username, password } = req.body;
    console.log('username, password', req.body);
    
    const foundUser = data.find(user => user.username === username);
    console.log('foundUser', foundUser);

    if (!foundUser) {
    return res.status(401).json({ message: "No user found. Please check username." });
    }
    console.log('foundUser password', foundUser.password)
    if(foundUser.password === password) {
      console.log('in found password');
      // Generate token and send back
      const token = jwt.sign({
      name: foundUser.name,
      username: foundUser.username,
      loginTime: Date.now()
      }, process.env.JWT_SECRET, {expiresIn: '59m'});
      console.log('env', process.env.JWT_SECRET);
      return res.status(200).json({ token });
    } else {
      return res.status(403).json({ message: "Invalid username or password" }); 
    }
  })
  .catch((error) => {
    console.log(error);
  })
});

app.get('/profile', authorize, (req, res) => {
  res.json({
    tokenInfo: req.payload
  });
})

//use routes
app.use('/participants', participantsRoutes);
app.use('/foodburning', honouringRoutes);

//start server
app.listen(port, function() {
    console.log(`server is running on ${port}`);
});  
  
  
  
  
