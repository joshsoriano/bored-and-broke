"use strict";

window.MagicSeaWeed = (() => {

    return {
        init: () => {
            var magicSeaWeedButton = $("#magicseaweed-button");

            magicSeaWeedButton.click(() => {
                $.getJSON("", {
                    // have to send them our url and stuff to get api key, but seems cool
                }).done((result) => {
                    console.log("MAGICSEAWEED -----------------------------");
                    console.log(result);
                });
            });
        }
    };
})();
