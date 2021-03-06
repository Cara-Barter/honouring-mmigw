const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);
const jwt = require('jsonwebtoken');

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

/* Get all honourees */
router.get('/', authorize,  (req, res) => {
    knex('honouring')
    .then((honourData) => {
        res.status(200).json({
          tokenInfo: req.payload,
          sensitiveInfo: honourData});
    })
    .catch(() => {
        res.status(400).json({
            message: 'Error getting honourees'
        });
    });
});

//get honourees by id
router.get('/:id', authorize, (req, res) => {
    knex('honouring')
        .then((data) => {
            if(!data.length) {
                res.status(404).json({
                    message: `honouree not found with the id ${req.params.id}`
                });
            } else {
                res.status(200).json({
                  tokenInfo: req.payload,
                  sensitiveInfo: data});
            }
        })
        .catch(() => {
            res.status(400).json({
                message: `Error getting honouree ${req.params.id}`
            });
        });
});

//create new participant
router.post('/', (req, res) => {
    
    const honourInfo = {
        yourName: req.body.yourName,
        lovedOnesName: req.body.lovedOnesName,
        nation: req.body.nation,
        gender: req.body.nation,
        community: req.body.community,
        relationship: req.body.relationship,
    }

  //if req.body.name is provided create a new honouree
  knex('honouring')
    .insert(honourInfo)
    .then((data) => {
      res.status(201).json({
          message: `Honouree ${req.body.lovedOnesName} created successfully with the id ${data}`
      });
    })
    .catch( () => {
        res.status(400).json({
            message: `Error creating honouree ${req.body.firstName}`
        });
    });
});

// Update an honouree
router.put('/:id', (req, res) => {
    knex('honouring')
      .where({ id: req.params.id })
      .update(req.body)
      .then((data) => {
        // promise chaining, return another query and use .then to handle the response
        return knex('honouring').where({ id: req.params.id });
      })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({
          message: `Error updating honouree ${req.params.id}`,
        });
      });
  });
  
  //Delete an honouree
  router.delete('/:id', (req, res) => {
    knex('honouring')
      .where({ id: req.params.id })
      .del(req.body)
      .then((data) => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.status(400).json({
          message: `Error deleting honouree ${req.params.id}`,
        });
      });
  });
  
module.exports = router;
