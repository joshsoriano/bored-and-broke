/**
  This file defines the Activity table in the database.
**/

'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Activity = db.define('activity', {

   // Self incrementing primary key.
   id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
   // We can check that it has been 24 hours since the last time activities
   // have been added to the database.
   date_added: { type: Sequelize.INTEGER }, // YYYYMMDD syntax.
   name: { type: Sequelize.TEXT },
   date: { type: Sequelize.INTEGER }, // YYYYMMDD syntax.
   location: { type: Sequelize.TEXT },
   image_url: { type: Sequelize.TEXT },
   link: { type: Sequelize.TEXT },
   price: { type: Sequelize.DOUBLE },
   description: { type: Sequelize.TEXT },
   query_city: { type: Sequelize.STRING },
   source: { type: Sequelize.STRING }

 });

module.exports = Activity;
