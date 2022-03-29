// Add console.log to check to see if our code is working.
console.log("working");
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level


// Create the map object with center and zoom level.
//let map = L.map('map').setView([30, 30], 2);



// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/satellite-v9',
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
   accessToken: API_KEY
});
//.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('map', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "http://localhost:8000/majorAirports.json";
//torontoData variable
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "http://localhost:8000/torontoRoutes.json";
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "http://localhost:8000/torontoNeighborhoods.json";
// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
//    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
//  L.geoJSON(data, {
//     color:"#0000FF",
//     weight: 1,
//     fillColor: "#FFFF00"
      //onEachFeature: function (feature, layer) {
      //    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3><hr><h3> Destination: "
      //    + feature.properties.dst + "</h3>");
     // }
//  })
//  .addTo(map);
//});
// Retrieve the earthquake GeoJSON data.
//       https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJSON(data).addTo(map);
  // This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  // This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
  }
// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {

  // We turn each feature into a circleMarker on the map.
  
  pointToLayer: function(feature, latlng) {
              console.log(data);
              return L.circleMarker(latlng);
          },
        // We set the style for each circleMarker using our styleInfo function.
      style: styleInfo
      }).addTo(map);
  });