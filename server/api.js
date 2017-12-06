const api = module.exports = require('express').Router()
const activities = require('./activities');

api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/activities', activities)

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
