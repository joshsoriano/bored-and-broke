'use strict';

const User = require('./user');
const Activity = require('./activity');
const Tagline = require('./tagline');

Tagline.belongsTo(Activity);
Tagline.belongsTo(User);

module.exports = {Activity, Tagline, User};
