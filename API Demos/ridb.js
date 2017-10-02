"use strict";

window.Ridb = (() => {

    return {
        init: () => {
            var ridbButton = $("#ridb-button");

            ridbButton.click(() => {
                $.getJSON("https://ridb.recreation.gov/api/v1/recareas/", {
                    // countryCode: "US",
                    // city: "Los Angeles",
                    apikey: "4AAFF0D0B0A84BA88E1FEE8C1476ED85"
                }).done((result) => {
                    console.log("RIDB -----------------------------");
                    console.log(result);
                });
            });
        }
    };
})();

/**
This API allows us to grab events from RIDB for a specific recreation area.



*/
