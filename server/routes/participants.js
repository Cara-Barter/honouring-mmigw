const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);

/* Get all participants */
router.get('/', (req, res) => {
    knex('participants')
    .then((data) => {
        res.status(200).json(data);
    })
    .catch(() => {
        res.status(400).json({
            message: 'error getting participants'
        });
    });
});