/**

When the command 'npm run seed' is entered, this information is added to the
database. This is for testing and demo purposes.

**/

const db = require('../db')

const seedActivities = () => db.Promise.map([
    {name: "Los Angeles Rams vs. Philadelphia Eagles", date: "20171210", location: "Los Angeles Memorial Coliseum", link: "http://www.ticketmaster.com/los-angeles-rams-vs-ph…eles-california-12-10-2017/event/0A00528CC3AB4E39", source: "TicketMaster", price: 70},
    {name: "Los Angeles Rams vs. San Francisco 49ers", date: "20171231", location: "Los Angeles Memorial Coliseum", link: "http://www.ticketmaster.com/los-angeles-rams-vs-sa…eles-california-12-31-2017/event/0A00528CC3B14E40", source: "TicketMaster", price: 2},
    {name: "Hamilton (Touring)", date: "20171203", location: "Hollywood Pantages Theatre", link: "http://www.ticketmaster.com/hamilton-touring-los-a…eles-california-12-03-2017/event/0B005250F8E5825E", source: "TicketMaster", price: 10},
    {name: "Hamilton (Touring)", date: "20171209", location: "Hollywood Pantages Theatre", link: "http://www.ticketmaster.com/hamilton-touring-los-a…eles-california-12-09-2017/event/0B005250FB9783CC", source: "TicketMaster", price: 32},
    {name: "Hamilton (Touring)", date: "20171210", location: "Hollywood Pantages Theatre", link: "http://www.ticketmaster.com/hamilton-touring-los-a…eles-california-12-10-2017/event/0B005250F94F82BB", source: "TicketMaster", price: 40},
    {name: "Los Angeles Lakers vs. Portland Trail Blazers", date: "20171223", location: "STAPLES Center", link: "http://www.ticketmaster.com/los-angeles-lakers-vs-…eles-california-12-23-2017/event/2C00530CF8730D95", source: "TicketMaster", price: 20},
    {name: "Hamilton (Touring)", date: "20171207", location: "Hollywood Pantages Theatre", link: "http://www.ticketmaster.com/hamilton-touring-los-a…eles-california-12-07-2017/event/0B005250FB8D83C8", source: "TicketMaster", price: 100},
    {name: "L.A. Lakers v Golden State Warriors (Kobe Bryant Jersey Retirement)", date: "20171218", location: "STAPLES Center", link: "http://www.ticketmaster.com/la-lakers-v-golden-sta…eles-california-12-18-2017/event/2C00530CF86E0D90", source: "TicketMaster", price: 20},
    {name: "Hamilton (Touring)", date: "20171209", location: "Hollywood Pantages Theatre", link: "http://www.ticketmaster.com/hamilton-touring-los-a…eles-california-12-09-2017/event/0B005250F9BD82F8", source: "TicketMaster", price: 40},
    {name: "Hamilton (Touring)", date: "20171215", location: "Hollywood Pantages Theatre", link: "http://www.ticketmaster.com/hamilton-touring-los-a…eles-california-12-15-2017/event/0B005250FBAC83D8", source: "TicketMaster", price: 0}
], activity => db.model('activity').create(activity));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedActivities)
   .then(activities => console.log(`Seeded ${activities.length} activities OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
