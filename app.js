'use strict';

const ISS_API = 'https://api.wheretheiss.at/v1/satellites/25544';
const lat = document.getElementById('lat');
const lon = document.getElementById('lon');
let firstLoad = true;

// initialize map
const map = L.map('iss-map').setView([31.505, -0.09], 1);

// add a tile layer to map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// create custom ISS icon for marker
const issIcon = L.icon({
  iconUrl: './img/iss.png',
  iconSize: [66, 44],
});

// add marker to map
const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);

async function getData() {
  const response = await fetch(ISS_API);
  const data = await response.json();
  const { latitude, longitude } = data;

  // set marker position
  marker.setLatLng([latitude, longitude]);

  // on first load: set ISS position as center of map
  if (firstLoad === true) {
    map.setView([latitude, longitude], 4);
    firstLoad = false;
  }

  // display coordinates
  lat.innerText = latitude;
  lon.innerText = longitude;
}

getData();
setInterval(getData, 1000);

// todo: set icon size by zoom level
setInterval(setIconSize, 1000);

function setIconSize() {
  const zoomLevel = map.getZoom();
  console.log('zoomLevel: ' + zoomLevel);

  //   if (zoomLevel > 1) {
  //     issIcon.iconSize = [5, 5];
  //     L.icon({
  //       iconUrl: './img/iss.png',
  //       iconSize: [166, 130],
  //       iconAnchor: [0, 0],
  //     });
  //     const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);
  //   }
}
// todo: END
