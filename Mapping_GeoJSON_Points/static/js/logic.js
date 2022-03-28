// Add console.log to check to see if our code is working.
console.log("working");
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

var map = L.map('map').setView([40.7, -94.5], 4);
<<<<<<< Updated upstream
=======

// An array containing each city's location, state, and population.
//moved to cities.js
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,
                   city.state,
                   city.population, {
        radius: city.population/100000,
        weight: 4,
        color: '#FF4500',
        fillColor: '#FF4500'
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

>>>>>>> Stashed changes
// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/satellite-v9',
<<<<<<< Updated upstream
    id: 'mapbox/streets-v11',
=======
    //id: 'mapbox/streets-v11',
    id: 'mapbox/dark-v10',
>>>>>>> Stashed changes
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicG9saWJlYXIiLCJhIjoiY2wxMWE4enlwMG51ODNwcDkyejI0cGl0eCJ9.7FU3w5DfEKzbJJ56WGTz6w'
}).addTo(map);

<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
