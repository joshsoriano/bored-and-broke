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

router.put('/find-or-create/:id/:name', function(req, res, next) {
    // If a user with the provided id doesn't exist, a user is created.
    // If a user with the provided id does exist, nothing happens.
    // The name and email are provided by the Facebook API.
    User.findOrCreate({
        where: {
          id: req.params.id,
          name: req.params.name
        }
    })
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(next);
});

<<<<<<< HEAD
router.put('/saveSettings', function(req, res, next) {
    User.update({
      bio: req.query.bio
    }, {
      where: {
        id: req.query.userId
      }
    })
    .catch(next);
});
=======
// update user settings aka the bio
>>>>>>> master

module.exports = router;
