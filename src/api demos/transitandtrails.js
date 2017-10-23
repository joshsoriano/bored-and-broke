"use strict";

window.TransitAndTrails = (() => {

    return {
        init: () => {
            var transitAndTrailsButton = $("#transitandtrails-button");

            transitAndTrailsButton.click(() => {
                $.getJSON("https://api.transitandtrails.org/api/v1/trailheads", {
                    // latitude: "37.910347725000001",
                    // distance: "20",
                    // park_name: "Golden Gate National Recreation Area",
                    apikey: "293646d411c713a2fd09d7adc9a070e74dce4588f4fcc13865d0e2acac0ef7b2"
                }).done((result) => {
                    console.log("TRANSIT AND TRAILS -----------------------------");
                    console.log(result);
                });
            });
        }
    };
})();
