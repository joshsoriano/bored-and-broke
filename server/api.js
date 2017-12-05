const api = module.exports = require('express').Router()
const activities = require('./activities');

api
  .use('/activities', activities)

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
