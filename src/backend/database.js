/**
  This file handles all database interactions.
*/

module.exports = (() => {
    const Sequelize = require('sequelize');

    // Connect to the database.
    const sequelize = new Sequelize('ebdb', 'boredandbroke', 'put password here', {
      host: 'aa7h0812c86b9x.cinowngvasql.us-east-2.rds.amazonaws.com',
      dialect: 'postgres'
    });

    return {
          getActivity: (activityId) => {
            // Return activity object from the database.
            return {};
          },

          getFutureActivities: (priceLimit, location="Los Angeles") => {
            // Return an array of activities that occur in the future from the database.
            return [];
          },

          getSavedActivities: (userId) => {
            // Return an array of activities that have been saved by a user.
            return [];
          },

          saveActivity: (userId, activityId, tagline) => {
            // Store userId, activityId, and tagline in the database.

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
          }
    };
})();
