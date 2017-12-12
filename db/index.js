const debug = require('debug')('sql')
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../package.json')

// create the database instance
const db = module.exports =new Sequelize('ebdb', 'boredandbroke', 'BoredBrokeAndAlone401', {
  host: 'aa7h0812c86b9x.cinowngvasql.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  define: {
    underscored: true,       // use snake_case rather than camelCase column names
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  }
})

// pull in our models
require('./models')

// sync the db, creating it if necessary
function sync(retries=0, maxRetries=5) {
  return db.sync({force:false})
    .then(ok => console.log(`Synced models to db`))
    .catch(fail => {
      console.log(fail)
    })
}

db.didSync = sync()
