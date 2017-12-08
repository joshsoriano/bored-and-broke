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

function addActivity(days, yyyymmdd) {
  // Only add activities if it has been at least a day since the last
  // activity has been added.
  if (days >= 1) {
      Activity.findOrCreate({
          where: {
              date_added: yyyymmdd,
              name: req.params.name,
              date: req.params.date, // YYYYMMDD syntax.
              location: req.params.location,
              image_url: req.params.imageUrl,
              link: req.params.link,
              price: req.params.price,
              description: req.params.description
          }
      })
  }
}

router.put('/add/:name/:date/:location/:imageUrl/:link/:price/:description', function(req, res, next) {
    // Add an activity to the database.
    // Convert today's date to an YYYYMMDD integer.
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0.
    let yyyy = today.getFullYear();
    let yyyymmdd = Number.parseInt(yyyy + mm + dd);

    let days = 0;
    Activity.max('date_added').then((last) => {
        // If there is nothing in the database, make sure activities can still
        // be added.
        days = last ? (yyyymmdd - last) : 2;
    }).then(addActivity(days, yyyymmdd))
    .then(() => {
          res.status(200).send("Saved activity!");
    })
    .catch(next);
});

module.exports = router;
