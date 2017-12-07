const db = require('../db') //this is required
const Activity = require('../db/models/activity');
const Tagline = require('../db/models/tagline');
const User = require('../db/models/user');

const Sequelize = require('sequelize');

const router = require('express').Router()

router.get('/all', function(req, res, next) {
    // Get all users and their taglines who have saved this event.
    Tagline.findAll({
        include: [User],
        where: {
          activity_id: req.query.activityId
        }
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

router.get('/single', function(req, res, next) {
    // Get a user's tagline for an event.
    Tagline.findOne({
        where: {
          user_id: req.query.userId,
          activity_id: req.query.activityId
        }
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
