const db = require('../db') //this is required
const User = require('../db/models/user');
const Activity = require('../db/models/activity');
const Tagline = require('../db/models/tagline');
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

router.delete('/remove', function(req, res, next) {
    // Delete the user and the user's taglines.
    User.destroy({
        where: {
          id: req.query.userId
        }
    })
    .then(Tagline.destroy({
        where: {
          user_id: req.query.userId
        }
    }))
    .then(() => {
        res.status(200).send('Removed user.');
    })
    .catch(next);
});

router.put('/find-or-create/:id', function(req, res, next) {
    // If a user with the provided id doesn't exist, a user is created.
    // If a user with the provided id does exist, nothing happens.
    User.findOrCreate({
        where: {
          id: req.params.id
        }
    })
    .then(() => {
        res.status(200).send('User definitely exists now.');
    })
    .catch(next);
});

module.exports = router;
