const db = require('../db') //this is required
const Activity = require('../db/models/activity');
const Tagline = require('../db/models/tagline');
const Sequelize = require('sequelize');

const router = require('express').Router()

router.get('/', function(req, res, next) {
      // Convert today's date to an YYYYMMDD integer.
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; // January is 0.
      let yyyy = today.getFullYear();
      let yyyymmdd = Number.parseInt(yyyy + mm + dd);

      Activity.findAll({
        limit: 80,
        where: {
          price: { [Sequelize.Op.lte]: req.query.priceLimit },
          date: { [Sequelize.Op.gte]: yyyymmdd }
        }
      })
      .then(result => {
          res.status(200).send(result);
      })
      .catch(next);
});

router.get('/single', function(req, res, next) {
    Activity.findOne({
        where: {
          id: req.query.id
        }
      })
      .then(result => {
          res.status(200).send(result);
      })
      .catch(next);
});

router.get('/saved', function(req, res, next) {
    Tagline.findAll({
        include: [ Activity ],
        where: {
          user_id: req.query.userId
        }
    })
    .then(result => {
          res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
