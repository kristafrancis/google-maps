let map;
let orlandoLatLng = { lat: 28.538336, lng: -81.379234 }

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: orlandoLatLng,
    zoom: 11,
  });


const marker = new google.maps.Marker({
  position: orlandoLatLng, 
  map: map,
});
}
