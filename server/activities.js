const db = require('../db') //this is required
const Activity = require('../db/models/activity');
const Tagline = require('../db/models/tagline');
const Sequelize = require('sequelize');

const router = require('express').Router()

router.get('/', function(req, res, next) {
      // Get all future activities.
      // Convert today's date to an YYYYMMDD integer.
      let today = new Date();
      let dd = today.getDate() + "";
      if (dd.length === 1) {
        // Make sure it is in dd format.
        dd = "0".concat(dd);
      }
      let mm = today.getMonth() + 1 + ""; // January is 0.
      let yyyy = today.getFullYear() + "";
      let yyyymmdd = Number.parseInt(yyyy.concat(mm).concat(dd));

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
    // Get a single activity.
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
    // Get a user's saved activities.
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

router.put('/add', function(req, res, next) {
    // Add an activity to the database.
    // Convert today's date to an YYYYMMDD integer.
    let today = new Date();
    let dd = today.getDate() + "";
    if (dd.length === 1) {
      // Make sure day is in dd format.
      dd = "0".concat(dd);
    }
    let mm = today.getMonth() + 1 + ""; // January is 0.
    let yyyy = today.getFullYear() + "";
    let yyyymmdd = Number.parseInt(yyyy.concat(mm).concat(dd));

    Activity.findOrCreate({
        where: {
            date_added: yyyymmdd,
            name: req.body.data.name,
            date: Number.parseInt(req.body.data.date),
            location: req.body.data.location,
            image_url: req.body.data.imageUrl,
            link: req.body.data.link,
            price: req.body.data.price ? Number.parseInt(req.body.data.price) : 0,
            description: req.body.data.description
        }
    })
    .then(res.status(200).send("Added activity!"))
    .catch(next);
});

module.exports = router;
