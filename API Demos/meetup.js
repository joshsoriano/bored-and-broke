// API Key: 22a3796b674b1237667d2f45252f

"use strict";

window.Meetup = (() => {

    return {
        init: () => {
            var meetupButton = $("#meetup-button");

            meetupButton.click(() => {
                console.log("clicked");
                $.getJSON("https://api.meetup.com/find/events?callback=?", {
                    sign: "true",
                    key: "22a3796b674b1237667d2f45252f",
                    lat: 34.052235,
                    lon: -118.243683,
                    radius: 10
                }).done((result) => {
                    console.log("MEETUP -----------------------------");
                    console.log(result);
                });
            });
        }
    };
})();
