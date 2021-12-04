require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
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

// const authorize = (req, res, next) => {
//     if (!req.headers.authorization) {
//       return res.status(401).json({message: 'No token found'})
//     }
//     const authTokenArray = req.headers.authorization.split(' ');
//     if (authTokenArray[0].toLowerCase() !== 'bearer' && authTokenArray.length !== 2) {
//       return res.status(401).json({message: 'Invalid token'});
//     }
  
//     jwt.verify(authTokenArray[1], process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(401).json({message: 'The token is expired or invalid'});
//       }
//       req.payload = decoded;
//       next();
//     });
// }

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const foundUser = users.find(user => user.username === username);

    if (!foundUser) {
    return res.status(401).json({message: "No user found. Please check username." });
}

if(foundUser.password === password) {
    // Generate token and send back
    const token = jwt.sign({
    name: foundUser.name,
    username: foundUser.username,
    loginTime: Date.now()
    }, process.env.JWT_SECRET, {expiresIn: '59m'});
    return res.status(200).json({token});
} else {
    return res.status(403).json({message: "Invalid username or password" }); 
}
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
  
  
  
  
