export class Map {
  constructor(coords) {
    // this.coordinates = coords;
    this.render(coords);
  }

  render(coordinates) {
    if (!google) {
      alert("Could not load maps library - please try again later!");
      return;
    }

    const map = new google.maps.Map(document.getElementById("map"), {
      center: coordinates,
      zoom: 16,
    });

    new google.maps.Marker({
      position: coordinates,
      map: map,
    });
  }
}

// Get the Map
// document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">

// const map = new ol.Map({
//   target: 'map',
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.OSM()
//     })
//   ],
//   view: new ol.View({
//     center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
//     zoom: 16
//   })
// });

// export async function getAddressFromCoords(coords) {
//     return '6th Avenue'; // return any dummy address you want
//   }

//   export async function getCoordsFromAddress(address) {
//     return {lat: 47.01, lng: 33.55}; // return any dummy coordinates you want
//   }
