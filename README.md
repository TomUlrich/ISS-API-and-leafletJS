<!-- # Mapping Geolocation with Leaflet.js -->

# Real-time ISS Location

<!-- ![](https://img.shields.io/badge/Project_Status-Continued_development-orange.svg) ![](https://img.shields.io/badge/Built_with-Leaflet.js-199900.svg) -->

This project showcases the current location of the International Space Station (ISS) in real-time. It continuously updates the ISS's latitude and longitude, displaying this information on a map and as text. Cartographed with leaflet.js and openstreetmap.  

![Map with ISS location](./img/screenshot.PNG)

## Table of Contents

- [Real-time ISS Location](#real-time-iss-location)
   * [Features](#features)
   * [Concepts and Technologies Used](#concepts-and-technologies-used)
   * [Interesting Facts](#interesting-facts)
   * [What I Learned](#what-i-learned)
      + [Leaflet Setup](#leaflet-setup)
         - [I. Preparing the page](#i-preparing-the-page)
         - [II. Setting up the map](#ii-setting-up-the-map)
         - [III. Marker options](#iii-marker-options)
   * [Useful Resources for Development](#useful-resources-for-development)
   * [Further Features to Implement](#further-features-to-implement)
   * [Acknowledgements](#acknowledgements)
   * [Author](#author)

## Features

- Real-time tracking of the ISS location
- Updates ISS coordinates every second
- Displays ISS location on an interactive map

## Concepts and Technologies Used

- **Leaflet.js**: An open-source JavaScript library for interactive maps.
- **Fetch API**: Used to make HTTP requests to the [ISS location API](https://wheretheiss.at/w/developer) and retrieve real-time data.
- **Real-time Data Visualization**: Continuously updating the webpage with live data.

## Interesting Facts

- The ISS travels at an average speed of 28,000 kilometers per hour.  

## What I Learned

Creating this project taught me how to integrate third-party APIs into a web application, handle real-time data updates, and display this data on an interactive map using Leaflet.js.

- fetch()
- async functions
- load JSON from API
- Leaflet.js

### Leaflet Setup

#### I. Preparing the page

```html
<!-- 1. Include Leaflet CSS file in the head section of your document: -->
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
  integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
  crossorigin=""
/>
```

```html
<!-- 2. Include Leaflet JavaScript file **after** Leaflet’s CSS: -->
<!-- Make sure you put this AFTER Leaflet's CSS -->
<script
  src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
  integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
  crossorigin=""
></script>
```

```html
<!-- 3. Put a div element with a certain id where you want your map to be: -->
<div id="map"></div>
```

```css
/* 4. Make sure the map container has a defined height, for example by setting it in CSS: */
#map {
  height: 180px;
}
```

#### II. Setting up the map

```javascript
// 1. Initialize the map and set its view to our chosen geographical coordinates and a zoom level:
const map = L.map('map').setView([51.505, -0.09], 13);
```

```javascript
// 2. Add a tile layer to our map:
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
```

Make sure all the code is called after the div and leaflet.js inclusion.

#### III. Marker options

```javascript
// 1. Create custom ISS icon for marker:
const issIcon = L.icon({
  iconUrl: './img/iss.png',
  iconSize: [66, 30],
});
```

```javascript
// 2. Create marker and add it to map:
const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);
```

```javascript
// 3. Set marker position:
marker.setLatLng([latitude, longitude]);
```

## Useful Resources for Development

**"Where the ISS at" API**

- [API Documentation](https://wheretheiss.at/w/developer)
- API endpoint: `https://api.wheretheiss.at/v1/satellites/25544`

**Leaflet.js**

- [Leaflet API Reference](https://leafletjs.com/reference.html)
- [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/)

## Further Features to Implement

- Set icon size by zoom level  
- Add a "center map to ISS position" button  
- Add a feature to display the current speed of the ISS  
- Implement a historical tracking feature to show the path the ISS has traveled  
- Tracking the ISS route: set marker each 60 seconds  
- Add more information about the ISS, such as the number of astronauts currently aboard  

## Acknowledgements

This project is based on this great YouTube tutorial: [Working with Data and APIs in JavaScript](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X).  
Thank you [Coding Train](https://www.youtube.com/@TheCodingTrain).

## Author

Created by [@Tom](https://github.com/TomUlrich) - feel free to contact me.
