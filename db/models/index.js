/**
  This file defines the associations (foreign keys) in the database.
**/
'use strict';

const User = require('./user');
const Activity = require('./activity');
const Tagline = require('./tagline');

// Create a foreign key to an Activity entry in the Tagline table.
Tagline.belongsTo(Activity);
// Create a foreign key to a User entry in the Tagline table.
Tagline.belongsTo(User);

module.exports = {Activity, Tagline, User};
