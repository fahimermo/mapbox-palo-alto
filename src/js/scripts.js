mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFoaW1lcm1vIiwiYSI6ImNra2Q5ZGpqNjB0amYycHJ4czl2YWltM28ifQ.GJzu1GC3Hpe5dZiPI1Ry1w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/fahimermo/ckkmgn5vn4qmw17tcrpbxae00",
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);
