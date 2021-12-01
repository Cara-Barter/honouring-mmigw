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
    console.log(req.body);
    // if no name is provided return message asking to provide a user name
//   if (!req.body.name) {
//     res.status(400).json({ message: `Please provide a name for the participant` });
//     return;
//   }
    const participantInfo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      province: req.body.province,
      postalCode: req.body.postalCode,
      country: req.body.country,
      nation: req.body.nation,
      gender: req.body.gender,
      survivor: req.body.survivor
    }

    const extraInfo = {
      age: req.body.age,
      dedicate: req.body.dedicate,
      shirtSize: req.body.shirtSize,
      phone: req.body.phone,
      organization: req.body.organization
    }

  //if req.body.name is provided create a new participant
  knex('participants')
    .insert(participantInfo)
    .then((data) => {
        console.log(data);
        extraInfo.participant_id = data[0];
        return knex('extra_info')
        .insert(extraInfo)
    }).then((data) => {
      console.log(data[0]);
      res.status(201).json({
          message: `Participant ${req.body.firstName} created successfully with the id ${data}`
      });
    })
    .catch( () => {
        res.status(400).json({
            message: `Error creating participant ${req.body.firstName}`
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