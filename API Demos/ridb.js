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

Example of output, returns an array:

{RECDATA: Array(50), METADATA: {…}}
METADATA
:
RESULTS
:
{CURRENT_COUNT: 50, TOTAL_COUNT: 3792}
SEARCH_PARAMETERS
:
{QUERY: "", OFFSET: 0, LIMIT: 50}
__proto__
:
Object
RECDATA
:
Array(50)
0
:
GEOJSON
:
{TYPE: "Point", COORDINATES: Array(2)}
Keywords
:
""
LastUpdatedDate
:
"2015-05-01"
OrgRecAreaID
:
""
RecAreaDescription
:
"WestWorld is located in north Scottsdale at the base of the McDowell Mountains.  Surrounded by the Sonoran Desert with over 360 acres of pristine landscaping, the covered Equidome Arena, Brett's Barn, and state-of-the-art equine facilities provide a spectacular setting for a variety of venues, including four annual Signature Events: the Barrett/Jackson Classic Auto Auction; All Arabian Horse Show; Sun Country Quarter Horse Show; and the Thunderbird Balloon Classic.
↵
↵Other amenities are also available at WestWorld, including horseback riding, catering facility, hiking trails into the McDowell Mountains, and recreational vehicle spaces.
↵
↵In November 1999, the Sanctuary Golf Course opened at the east end of the West World property.  This 18-hole golf course, with only 75 acres of turf, is designed to be water efficient, easily maintained, and was awarded membership in the Audubon Cooperative Sanctuary Program (the first golf course ever to achieve this distinction upon initial opening)."
RecAreaDirections
:
"Area is north of Frank Lloyd Wright Boulevard in Scottsdale, Arizona.  Pima Frontage road is open northbound and southbound.  Call 480.312.6802 or see <A HREF="http://www.scottsdaleaz.gov/Assets/documents/westworld/WWDirections.pdf">Directions</a> here."
RecAreaEmail
:
""
RecAreaFeeDescription
:
""
RecAreaID
:
4
RecAreaLatitude
:
33.63307
RecAreaLongitude
:
-111.87832
RecAreaMapURL
:
""
RecAreaName
:
"WestWorld"
RecAreaPhone
:
"480-312-6802"
RecAreaReservationURL
:
""
StayLimit
:
""
__proto__
:
Object



*/
