mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFoaW1lcm1vIiwiYSI6ImNra2Q5ZGpqNjB0amYycHJ4czl2YWltM28ifQ.GJzu1GC3Hpe5dZiPI1Ry1w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/fahimermo/ckkmgn5vn4qmw17tcrpbxae00",
  center: [-122.143, 37.4419], // starting position
  zoom: 12,
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);

// map.on("load", function () {
//   map.addSource("places", {
//     type: "geojson",
//     data: {
//       type: "FeatureCollection",
//       features: [
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
//             icon: "theatre",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.421098, -122.093672],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
//             icon: "theatre",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.421713, -122.09657],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
//             icon: "bar",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.429655, -122.122471],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
//             icon: "art-gallery",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.434087, -122.154466],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
//             icon: "bicycle",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.43087, -122.155073],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
//             icon: "rocket",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.432647, -122.163159],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
//             icon: "music",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.438593, -122.163931],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
//             icon: "music",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.437196, -122.168695],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
//             icon: "music",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [37.439104, -122.158588],
//           },
//         },
//       ],
//     },
//   });
//   // Add a layer showing the places.
//   map.addLayer({
//     id: "places",
//     type: "symbol",
//     source: "places",
//     layout: {
//       "icon-image": "{icon}-15",
//       "icon-allow-overlap": true,
//     },
//   });

//   // When a click event occurs on a feature in the places layer, open a popup at the
//   // location of the feature, with description HTML from its properties.
//   map.on("click", "places", function (e) {
//     var coordinates = e.features[0].geometry.coordinates.slice();
//     var description = e.features[0].properties.description;

//     // Ensure that if the map is zoomed out such that multiple
//     // copies of the feature are visible, the popup appears
//     // over the copy being pointed to.
//     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//       coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//     }

//     new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
//   });

//   // Change the cursor to a pointer when the mouse is over the places layer.
//   map.on("mouseenter", "places", function () {
//     map.getCanvas().style.cursor = "pointer";
//   });

//   // Change it back to a pointer when it leaves.
//   map.on("mouseleave", "places", function () {
//     map.getCanvas().style.cursor = "";
//   });
// });

// set the bounds of the map
var bounds = [
  [-125.143, 35.4419],
  [-120.143, 39.4419],
];
map.setMaxBounds(bounds);

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();

// an arbitrary start will always be the same
// only the end or destination will change
var start = [-122.143, 37.4419];

// create a function to make a directions request
function getRoute(end) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  var start = [-122.143, 37.4419];
  var url =
    "https://api.mapbox.com/directions/v5/mapbox/cycling/" +
    start[0] +
    "," +
    start[1] +
    ";" +
    end[0] +
    "," +
    end[1] +
    "?steps=true&geometries=geojson&access_token=" +
    mapboxgl.accessToken;

  // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.onload = function () {
    var json = JSON.parse(req.response);
    var data = json.routes[0];
    var route = data.geometry.coordinates;
    var geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    // if the route already exists on the map, reset it using setData
    if (map.getSource("route")) {
      map.getSource("route").setData(geojson);
    } else {
      // otherwise, make a new request
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: geojson,
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
    // get the sidebar and add the instructions
    var instructions = document.getElementById("instructions");
    var steps = data.legs[0].steps;

    var tripInstructions = [];
    for (var i = 0; i < steps.length; i++) {
      tripInstructions.push("<br><li>" + steps[i].maneuver.instruction) +
        "</li>";
      instructions.innerHTML =
        '<br><span class="duration">Trip duration: ' +
        Math.floor(data.duration / 60) +
        " min 🚴 </span>" +
        tripInstructions;
    }
  };
  req.send();
}

map.on("load", function () {
  // make an initial directions request that
  // starts and ends at the same location
  getRoute(start);

  // Add starting point to the map
  map.addLayer({
    id: "point",
    type: "circle",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: start,
            },
          },
        ],
      },
    },
    paint: {
      "circle-radius": 10,
      "circle-color": "#3887be",
    },
  });

  map.on("click", function (e) {
    var coordsObj = e.lngLat;
    canvas.style.cursor = "";
    var coords = Object.keys(coordsObj).map(function (key) {
      return coordsObj[key];
    });
    var end = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: coords,
          },
        },
      ],
    };
    if (map.getLayer("end")) {
      map.getSource("end").setData(end);
    } else {
      map.addLayer({
        id: "end",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: coords,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      });
    }
    getRoute(coords);
  });
});
