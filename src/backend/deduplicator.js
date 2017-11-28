/**
  This module makes sure based on if they exist in the database already
  or not. Activities should only be added if they do not already exist in the
  database. This works to solve the issue of the same activity appearing in
  multiple API call results.

  This module also checks to make sure there aren't duplicate activities within
  the input list itself.

  input: A list of Activity objects.
  output: A list of Activity objects.
*/

module.exports = () => {

  const Sequelize = require('sequelize');

  // Connect to the database.
  const sequelize = new Sequelize('ebdb', 'boredandbroke', 'put password here', {
    host: 'aa7h0812c86b9x.cinowngvasql.us-east-2.rds.amazonaws.com',
    dialect: 'postgres'
  });

  return {
    getDeDups: (activities) => {

      deDups = [];

      // de dup from eachother
      seen = {};
      /*deDups = a.filter(function(activity) {
        // We compare the activities based on name and date.
        // Those properties are combined to create the key in the 'seen' object.

        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });

      // de dup from activities in the */

      return deDups;

    }
  }

};
