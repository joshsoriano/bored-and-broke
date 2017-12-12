/**
  This file defines the routes that lead to each of the files.
**/

const api = module.exports = require('express').Router()
const activities = require('./activities');
const taglines = require('./taglines');
const users = require('./users');

api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/activities', activities)
  .use('/taglines', taglines)
  .use('/users', users)

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
