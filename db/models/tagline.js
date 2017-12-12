/**
  This file defines the Tagline table in the database.
  An entry should be created every time a user saves an activity.
  This also contains two foreign keys: activity_id and user_id which are
  assigned in ./index.js.
**/
'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');
const User = require('./user.js');
const Activity = require('./activity.js');

const Tagline = db.define('tagline', {
   // Self incrementing primary key.
   id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
   tag: { type: Sequelize.TEXT }

 });

 module.exports = Tagline;
