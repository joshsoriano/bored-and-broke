// API Key: XgSXTL5TkHCfnxCm

"use strict";

window.Eventful = (() => {

    return {
        init: () => {
            var eventfulButton = $("#eventful-button");

            eventfulButton.click(() => {
                console.log("clicked");
                $.getJSON("http://api.eventful.com/json/events/search?callback=?", {
                    app_key: "XgSXTL5TkHCfnxCm",
                    location: "Los Angeles, CA",
                    date: "Future",
                    within: 10,
                    units: "mi"
                }).done((result) => {
                    console.log("EVENTFUL -----------------------------");
                    console.log(result);
                });
            });
        }
    };
})();

/**
Eventful API

The result contains an array of events within the specified parameters. These are the fields within
each event object:

all_day: "0"

calendar_count: null

calendars: null

city_name: "San Gabriel"

comment_count: null

country_abbr: "USA"

country_abbr2: "US"

country_name: "United States"

created: "2017-08-11 16:46:56"

description: null

geocode_type: "EVDB Geocoder"

going: null

going_count: null

groups: null

id: "E0-001-105603903-4"

image: {small: {width: "48", url: "http://d1marr3m5x4iac.cloudfront.net/images/small/…532-1.jpeg_/josh-feinberg-nilan-chaudhuri-32.jpeg", height: "48"}, width: "48", caption: null, medium: {width: "128", url: "http://d1marr3m5x4iac.cloudfront.net/images/medium…532-1.jpeg_/josh-feinberg-nilan-chaudhuri-32.jpeg", height: "128"}, url: "http://d1marr3m5x4iac.cloudfront.net/images/small/…532-1.jpeg_/josh-feinberg-nilan-chaudhuri-32.jpeg", …}

latitude: "34.0983147"

link_count: null

longitude: "-118.1090756"

modified: "2017-09-13 10:50:48"

olson_path: "America/Los_Angeles"

owner: "evdb"

performers: null

postal_code: "91776"

privacy: "1"

recur_string: null

region_abbr: "CA"

region_name: "California"

start_time: "2017-11-12 17:00:00"

stop_time: null

title: "Josh Feinberg / Nilan Chaudhuri"

tz_city: null

tz_country: null

tz_id: null

tz_olson_path: null

url: "http://losangeles.eventful.com/events/josh-feinberg-nilan-chaudhuri-/E0-001-105603903-4?utm_source=apis&utm_medium=apim&utm_campaign=apic"

venue_address: "320 South Mission Drive"

venue_display: "1"

venue_id: "V0-001-004558575-0"

venue_name: "San Gabriel Mission Playhouse"

venue_url: "http://losangeles.eventful.com/venues/san-gabriel-mission-playhouse-/V0-001-004558575-0?utm_source=apis&utm_medium=apim&utm_campaign=apic"

watching_count: null

*/
