/**
  This file handles all database interactions.
*/

module.exports = (() => {
    const Sequelize = require('sequelize');
    const Models = require('./models');

    // Connect to the database.
    const sequelize = new Sequelize('ebdb', 'boredandbroke', 'put password here', {
      host: 'aa7h0812c86b9x.cinowngvasql.us-east-2.rds.amazonaws.com',
      dialect: 'postgres'
    });

    return {
          getActivity: (activityId) => {
            // Return activity object from the database.
            Models.Activity.findOne({
              where: {
                id: activityId
              }
            });
            // TODO: parse into Activity object.
            return {};
          },

          getFutureActivities: (priceLimit, location="Los Angeles") => {
            // Return an array of activities that occur in the future from the database.
            return [];
          },

          getSavedActivities: (userId) => {
            // Return an array of activities that have been saved by a user.
            Models.Tagline.findAll({
              where: {
                user_id: userId
              }
            });

            // Parse into activity objects.
            return [];
          },

          getTagline: (userId, activityId) => {
            // Get a user's tagline for an event.
            let tagline = Models.Tagline.findOne({
              attributes: ['tagline'],
              where: {
                user_id: userId,
                activity_id: activityId
              }
            });
            return tagline;
          },

          saveActivity: (userId, activityId, tagline) => {
            // Store userId, activityId, and tagline in the database.
            // First, remove all single quotes. Single quotes will mess up PostGres.
            let parsedTag = tagline.replace("'", "");
            Models.Tagline.create({
              user_id: userId,
              activty_id: activityId,
              tagline: parsedTag
            });
          },

          unsaveActivity: (userId, activityId) => {
            // Remove tagline row for this userId and activityId in the database.
            Models.Tagline.destroy({
              where: {
                user_id: userId,
                activity_id: activityId
              }
            });
          },

          addActivities: (location="Los Angeles") => {
            // Store activity objects in the database.
            // The activities should be de-duplicated before storing.

          },

          getUserSettings: (userId) => {
            // Return a user object.
            return {};

          },

          setUserSettings: (userObj) => {
            // Store a user's information to the database.
            // This either writes or re-writes a row in the User table.

          },

          isUser: (userId) => {
            // Returns true if the user exists in the User table of the database.
            return false;
          },

          removeUser: (userId) => {
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
          },

          sync: (sequelize) => {
            // Creates the tables according to the models defined in models.js
            // if they do not exist already.
            Models.sync(sequelize);
          }
    };
})();
