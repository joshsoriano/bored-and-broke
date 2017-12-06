'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');
const User = require('./user.js');
const Activity = require('./activity.js');

const Tagline = db.define('tagline', {
   // Self incrementing primary key.
   id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },

   // Foreign key to the Activity table.
   activity_id: {
     type: Sequelize.INTEGER,
     references: {
       model: Activity,
       key: 'id',
       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
     }
   },

   // Foreign key to the User table.
   user_id: {
     type: Sequelize.STRING,
     references: {
       model: User,
       key: 'id',
       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
     }
   },
   tagline: { type: Sequelize.STRING }

 });

 module.exports = Tagline;
