"use strict";

window.TicketMaster = (() => {

    return {
        init: () => {
            var ticketMasterButton = $("#ticketmaster-button");

            ticketMasterButton.click(() => {
                $.getJSON("https://app.ticketmaster.com/discovery/v2/events.json", {
                    countryCode: "US",
                    city: "Los Angeles",
                    apikey: "uWhf6Zv92eNoIQA4E16MdCe7HC2DSEMS"
                }).done((result) => {
                    console.log("TICKET MASTER -----------------------------");
                    console.log(result);
                });
            });
        }
    };
})();

/**
This API allows us to grab events from TicketMaster based on city. There is no
min or max price parameter so we would have to filter events based on price
ourselves.

The result contains an array of events. Here is an example of one of the event
elements:

{
  classifications:[{…}]
  dates:
    spanMultipleDays:false
    start:{localDate: "2017-11-25", localTime: "20:00:00", dateTime: "2017-11-26T04:00:00Z", dateTBD: false, dateTBA: false, …}
    status:{code: "onsale"}
    timezone:"America/Los_Angeles"
  __proto__:Object
  id:"vvG1iZfmQUBeHp"
  images:Array(10)
    0:{
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa…b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: true
      }
    .......... more images
  __proto__:Array(0)
  locale:"en-us"
  name:"Too Short Concert"
  promoter:{id: "494", name: "PROMOTED BY VENUE", description: "PROMOTED BY VENUE / NTL / USA"}
  promoters:[{…}]
  sales:{public: {…}}
  test:false
  type:"event"
  url:"https://www.universe.com/events/too-short-concert-tickets-L0RM8Q"
  _embedded:
    attractions:[{…}]
    venues:Array(1)
      0:{
        name: "Globe Theatre",
        type: "venue",
        id: "KovZ917A5b7",
        test: false,
        url: "http://www.ticketmaster.com/venue/90368",
         …
       }
      length:1
      __proto__:Array(0)
  __proto__:Object
  _links:{self: {…}, attractions: Array(1), venues: Array(1)}
}

*/
