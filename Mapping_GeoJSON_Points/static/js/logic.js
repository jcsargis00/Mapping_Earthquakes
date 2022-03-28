// Add console.log to check to see if our code is working.
console.log("working");
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

// Create the map object with center at the San Francisco airport.
let map = L.map('map').setView([37.5, -122.5],10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup();
    }
    //pointToLayer: function(feature, latlng) {
    //  console.log(feature);
    //  return L.marker(latlng)
    //  .bindPopup("<h2>" + feature.properties.name + "</h2>" +
     //             "___________________________________________" +
     //             "<h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
    //}

  }).addTo(map);

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/satellite-v9',
    //id: 'mapbox/streets-v11',
    //id: 'mapbox/dark-v10',
    id: 'mapbox/navigation-preview-night-v4',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicG9saWJlYXIiLCJhIjoiY2wxMWE4enlwMG51ODNwcDkyejI0cGl0eCJ9.7FU3w5DfEKzbJJ56WGTz6w'
}).addTo(map);


