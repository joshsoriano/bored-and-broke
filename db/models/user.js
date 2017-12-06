'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('user', {

   // This id should be the user's Facebook id.
   id: { type: Sequelize.STRING,  primaryKey: true, allowNull: false },
   name: { type: Sequelize.STRING },
   bio: { type: Sequelize.STRING }

 });

 module.exports = User;
