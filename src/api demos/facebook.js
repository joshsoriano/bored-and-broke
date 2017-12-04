// "use strict";
//
// window.Facebook = (() => {
//
//     return {
//         init: () => {
//             var facebookButton = $("#facebook-button");
//
//             facebookButton.click(() => {
//                 console.log("clicked");
//                 $.getJSON("https://graph.facebook.com/10215062908025231/picture?callback=?", {
//                 }).done((result) => {
//                     console.log("FACEBOOK -----------------------------");
//                     console.log(result);
//                     document.getElementById("facebook-image").setAttribute("src", result);
//                 });
//             });
//         }
//     };
// })();

"use strict";
document.getElementById("facebook-image").setAttribute("src", "http://graph.facebook.com/" + "10215062908025231" + "/picture?type=normal");
