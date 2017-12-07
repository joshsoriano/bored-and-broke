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

router.save('/saveSettings', function(req, res, next) {
    User.update({
      bio: req.query.bio
    }, {
      where: {
        id: req.query.userId
      }
    })
    .catch(next);
});

module.exports = router;
