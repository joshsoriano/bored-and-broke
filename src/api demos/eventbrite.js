"use strict";

window.Eventbrite = (() => {

    return {
        init: () => {
            var eventbriteButton = $("#eventbrite-button");

            eventbriteButton.click(() => {
                console.log("clicked");
                $.getJSON("https://www.eventbriteapi.com/v3/events/search/?token=WJKCHNMPIP6DBF5S3XQF", {
                    "location.address": "Los Angeles, CA",
                    "start_date.range_start": "2017-10-01T13:00:00",
                    "location.within": "10mi"
                }).done((result) => {
                    console.log("EVENTBRITE -----------------------------");
                    console.log(result);
                });
            });
        }
    };
})();

/**
This API allows us to grab activities based off location, range, and date (there are
more parameters we can use if we want).  There is no price range parameter, so we
will have to sort through the prices, which shouldn't be that hard.

The result contains an array of events. Here is an example of one of the event
elements:

events: Array(50)
    0:
        capacity:8000
        capacity_is_custom:true
        category_id:"103"
        changed:"2017-09-19T02:44:08Z"
        created:"2017-08-30T15:59:13Z"
        currency:"USD"
        description:{text: "The Hottest Open Mic + Jam Session in the city
        PER…quila. The place will fill up fast so come early!", html: "<P>The
        Hottest Open Mic + Jam Session in the city …>. The place will fill up
        fast so come early!</P>"}
        end:{timezone: "America/Los_Angeles", local: "2017-10-01T18:00:00",
        utc: "2017-10-02T01:00:00Z"}
        format_id:"6"
        hide_end_date:false
        hide_start_date:false
        id:"37456780238"
        is_free:true
        is_locked:false
        is_reserved_seating:false
        is_series:false
        is_series_parent:false
        listed:true
        locale:"en_US"
        logo:{crop_mask: {…}, original: {…}, id: "34786387", url:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%…%2C4592%2C2296&s=4
        596d3b24d82018b6f0c860fd2c07893", aspect_ratio: "2", …}
        logo_id:"34786387"
        name:{text: "Soulful Sundays @ Comfort LA", html: "Soulful Sundays
        @ Comfort LA"}
        online_event:false
        organizer_id:"9896634880"
        privacy_setting:"unlocked"
        resource_uri:"https://www.eventbriteapi.com/v3/events/37456780238/"
        shareable:true
        source:"create_2.0"
        start:{timezone: "America/Los_Angeles", local: "2017-10-01T14:00:00",
        utc: "2017-10-01T21:00:00Z"}
        status:"live"
        subcategory_id:"3014"
        tx_time_limit:480
        url:"https://www.eventbrite.com/e/soulful-sundays-comfort-la-tickets-
        37456780238?aff=ebapi"
        venue_id:"18852652"
        version:"3.0.0"
        __proto__:Object

*/
