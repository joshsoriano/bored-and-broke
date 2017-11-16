import Sequelize from 'sequelize';
import * as Models from './models.js';

/**
  This file handles all database interactions.
*/
import Sequelize from 'sequelize';
import * as Models from './models.js';

export class database {

    database() {
      this.Op = Sequelize.Op;
      // Connect to the database.
      this.sequelize = new Sequelize('ebdb', 'boredandbroke', 'put password here', {
        host: 'aa7h0812c86b9x.cinowngvasql.us-east-2.rds.amazonaws.com',
        dialect: 'postgres'
      });

    }

    getActivity(activityId) {
      // Return activity object from the database.
      Models.Activity.findOne({
        where: {
          id: activityId
        }
      }).then((activity) => {
        // Parse into activity object.
      });

      return {};
    }

    getFutureActivities(priceLimit) {
      // Return an array of activities that occur in the future from the database.

      // Convert today's date to an YYYYMMDD integer.
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; // January is 0.
      let yyyy = today.getFullYear();
      let yyyymmdd = Number.parseInt(yyyy + mm + dd);

      Models.Activity.findAll({
        where: {
          price: { [this.Op.lte]: priceLimit },
          date: { [this.Op.gte]: yyyymmdd }
        }
      }).then((activities) => {
          // Parse the results into Activity objects.
      });

      return [];
    }

    getSavedActivities (userId) {
      // Return an array of activities that have been saved by a user.
      Models.Tagline.findAll({
        where: {
          user_id: userId
        }
      }).then((activities) => {
          // Parse the results into Activity objects.
      });

      return [];
    }

    getTagline (userId, activityId) {
      // Get a user's tagline for an event.
      return Models.Tagline.findOne({
        attributes: ['tagline'],
        where: {
          user_id: userId,
          activity_id: activityId
        }
      });
    }

    saveActivity (userId, activityId, tagline) {
      // Store userId, activityId, and tagline in the database.
      // First, remove all single quotes. Single quotes will mess up PostGres.
      let parsedTag = tagline.replace(/'/g, '');
      Models.Tagline.create({
        user_id: userId,
        activty_id: activityId,
        tagline: parsedTag
      });
    }

    unsaveActivity(userId, activityId) {
      // Remove tagline row for this userId and activityId in the database.
      Models.Tagline.destroy({
        where: {
          user_id: userId,
          activity_id: activityId
        }
      });
    }

    addActivities() {
      // Store activity objects in the database.
      // The activities should be de-duplicated before storing.
    }

    getUserSettings(userId) {
      // Return a user object.
      return {};
    }

    setUserSettings(userObj) {
      // Store a user's information to the database.
      // This either writes or re-writes a row in the User table.

    }

    isUser(userId) {
      // Returns true if the user exists in the User table of the database.
      return false;
    }

    removeUser(userId){
      // Remove a user from the Users table of the database.
      Models.User.destroy({
        where: {
          id: userId
        }
      });

      // Also remove their taglines.
      Models.Tagline.destroy({
        where: {
          user_id: userId
        }
      });
    }

    daysSinceUpdated() {
      // Returns the number of days since activities have been added to the
      // activity table.

      // Convert today's date to an YYYYMMDD integer.
      let date = new Date();
      let dd = date.getDate();
      let mm = date.getMonth() + 1; // January is 0.
      let yyyy = date.getFullYear();
      let today = Number.parseInt(yyyy + mm + dd);

      let days = 0;
      Models.Activity.max('last_updated').then((last) => {
        days = today - last;
      });
      return days;
    }

    sync() {
      // Creates the tables according to the models defined in models.js
      // if they do not exist already.
      Models.sync(this.sequelize);
    }
};
