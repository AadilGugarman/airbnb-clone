mapboxgl.accessToken = map_token;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});



const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML(
    `<h5>${listing.location}</h5><p>Exact location provided after booking</p>`
  )
  .setMaxWidth("300px");
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);
