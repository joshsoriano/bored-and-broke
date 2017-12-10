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
