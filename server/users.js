const db = require('../db') //this is required
const User = require('../db/models/user');
const Sequelize = require('sequelize');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    // Get a user's information from the database. If this is null,
    // the user does not exist in the database.
    User.findOne({
        where: {
          id: req.query.id
        }
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
