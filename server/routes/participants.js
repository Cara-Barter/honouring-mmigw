const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);

/* Get all participants */
router.get('/', (req, res) => {
    knex('participants')
    .then((participantData) => {
        res.status(200).json(participantData);
    })
    .catch(() => {
        res.status(400).json({
            message: 'Error getting participants'
        });
    });
});

//get participants by id
router.get('/:id', (req, res) => {
    knex('participants')
        .where({ id: req.params.id })
        .then((data) => {
            if(!data.length) {
                res.status(404).json({
                    message: `participant not found with the id ${req.params.id}`
                });
            } else {
                res.status(200).json(data[0]);
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
    console.log(req.body);
    // if no name is provided return message asking to provide a user name
//   if (!req.body.name) {
//     res.status(400).json({ message: `Please provide a name for the participant` });
//     return;
//   }
  //if req.body.name is provided create a new participant
  knex('participants', 'adtlInfo')
    .insert(req.body)
    .then((data) => {
        console.log(data);
        res.status(201).json({
            message: `Participant ${req.body.name} created successfully with the id ${data}`
        });
    })
    .catch( () => {
        res.status(400).json({
            message: `Error creating participant ${req.body.name}`
        });
    });
});

/*
 * Update a participant
 */
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
  
  /*
   * Delete a participant
   */
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