/**
  The retrieve function returns a list of activity objects. Activity objects are
  defined as follows:

  activity: {
    name: String name of the activity.
    date: String date of the activity.
    location: String location of the activity.
    link: Url to an external page for the activity.
    source: The API e.g. "TicketMaster"
    imageUrl: A url to an image for this activity.
    price: The float price of an activity.
  }
*/

window.activityRetriever = (() => {

    return {
          retrieve: () => {
            // List of JSON activity elements.
            let result = [];

            // Add TicketMaster activities.
            $.getJSON("https://app.ticketmaster.com/discovery/v2/events.json", {
                countryCode: "US",
                city: "Los Angeles",
                apikey: "uWhf6Zv92eNoIQA4E16MdCe7HC2DSEMS"
            }).done((result) => {
              result._embedded.events.map((event) => {
                  let activity = {};

                  // Build the activity object.
                  activity.name = event.name;
                  activity.date = event.dates.start.localDate;
                  activity.location = event._embedded.venues[0].name; // Use the first venue name available.
                  activity.link = event.url;
                  activity.source = "TicketMaster";
                  activity.imageUrl = event.images[0].url; // Use the first image available.
                  activity.price = event.priceRanges ? event.priceRanges[0].min : 0;

                  // Add it to the result list.
                  result.append(activity);
                })
            });

            // Return final list of activities.
            return result;
        }
    };
})();
