// Add console.log to check to see if our code is working.
console.log("working");
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

var map = L.map('map').setView([30.1975, -97.6664], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

  // Create a polyline using the line coordinates and make the line blue.
L.polyline(line, {
    color: "blue"
    
  }).addTo(map);

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/satellite-v9',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicG9saWJlYXIiLCJhIjoiY2wxMWE4enlwMG51ODNwcDkyejI0cGl0eCJ9.7FU3w5DfEKzbJJ56WGTz6w'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);