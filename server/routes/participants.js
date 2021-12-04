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

/* Get all participants */
router.get('/', authorize, (req, res) => {
    knex('participants as p')
    .innerJoin('extra_info as e', 'e.participant_id', 'p.id')
    .then((participantData) => {
        res.status(200)
        .json({
          tokenInfo: req.payload,
          sensitiveInfo: participantData
        }
        );
    })
    .catch(() => {
        res.status(400).json({
            message: 'Error getting participants'
        });
    });
});

//get participants by id
router.get('/:id', authorize, (req, res) => {
  console.log(req.payload);
    knex.from('participants as p')
        .innerJoin('extra_info as e', 'e.participant_id', 'p.id')
        .where('p.id', req.params.id)
        .then((data) => {
            if(!data.length) {
                res.status(404).json({
                    message: `participant not found with the id ${req.params.id}`
                });
            } else {
                res.status(200).json(data);
            }
        })
        .catch(() => {
            res.status(400).json({
                message: `Error getting participant ${req.params.id}`
            });
        });
});

//create new participant
router.post('/', (req, res) => {
    
  const { 
    firstName, 
    lastName, 
    email, 
    address1, 
    address2, 
    city, 
    province, 
    postalCode, 
    country,
    nation,
    gender,
    survivor,
    age,
    dedicate,
    shirtSize,
    phone,
    organization
  } = req.body;

  const participantInfo = {
    firstName,
    lastName,
    email,
    address1,
    address2,
    city,
    province,
    postalCode,
    country,
    nation,
    gender,
    survivor
  }

  const extraInfo = {
    age,
    dedicate,
    shirtSize,
    phone,
    organization
  }

  let participantId;
  
  knex('participants')
    .insert(participantInfo)
    .then((data) => {
        //console.log('participant created', data);
        participantId = data[0];
        extraInfo.participant_id = data[0];
        return knex('extra_info')
        .insert(extraInfo)
    }).then((data) => {
      //console.log('new participant', data[0]);
      res.status(201).json({
          id: participantId,
          message: `Participant ${req.body.firstName} created successfully with the id ${data}`
      });
    })
    .catch( () => {
        res.status(400).json({
            message: `Error creating participant ${req.body.firstName}`
        });
    });
});

//Update a participant
router.put('/:id', (req, res) => {
    knex('participants')
      .where({ id: req.params.id })
      .update(req.body)
      .then((data) => {
        // promise chaining, return another query and use .then to handle the response
        return knex('participants').where({ id: req.params.id });
      })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({
          message: `Error updating participant ${req.params.id}`,
        });
      });
});

//Delete a participant
router.delete('/:id', (req, res) => {
  knex('participants')
    .where({ id: req.params.id })
    .del(req.body)
    .then((data) => {
      res.sendStatus(204);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error deleting participant ${req.params.id}`,
      });
    });
});
  
module.exports = router;