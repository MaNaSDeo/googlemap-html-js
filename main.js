function terrainFuntion() {
  if (window.map) map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
  else console.warn("Map not initialized yet.");
}

function markerFunction() {
  if (window.map) {
    const LAL_QILA_Marker = new google.maps.Marker({
      position: {
        lat: 28.6562,
        lng: 77.241,
      },
      label: "A",
      title: "Hello I'm Eiffel",
    });

    LAL_QILA_Marker.setMap(map);
  }
}

const routeCoordinates = [
  { lat: 12.9716, lng: 77.5946 }, // Bangalore
  { lat: 13.5, lng: 78.2 }, // near Chittoor
  { lat: 14.5, lng: 79.5 }, // near Nellore
  { lat: 15.8, lng: 80.5 }, // near Ongole
  { lat: 17.0, lng: 81.6 }, // near Rajahmundry
  { lat: 18.3, lng: 83.0 }, // near Vizianagaram
  { lat: 19.2, lng: 84.7 }, // near Berhampur
  { lat: 20.3, lng: 85.8 }, // near Bhubaneswar
  { lat: 22.0, lng: 86.5 }, // near Jamshedpur
  { lat: 24.5, lng: 86.7 }, // Deoghar
];

function polylineFunction() {
  if (window.map) {
    const homePath = new google.maps.Polyline({
      path: routeCoordinates,
      geodesic: true,
      strokeColor: "red",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    homePath.setMap(map);
  }
}

const delhiBoundary = [
  { lat: 28.8832, lng: 76.9991 }, // North West
  { lat: 28.8784, lng: 77.089 }, // North Delhi
  { lat: 28.7996, lng: 77.1185 }, // West Delhi
  { lat: 28.6925, lng: 77.1553 }, // South West
  { lat: 28.5708, lng: 77.2486 }, // South Delhi
  { lat: 28.5245, lng: 77.2851 }, // South-East Delhi
  { lat: 28.6106, lng: 77.3503 }, // East Delhi
  { lat: 28.7154, lng: 77.2903 }, // North-East Delhi
  { lat: 28.8008, lng: 77.233 }, // North-Central
  { lat: 28.8594, lng: 77.1203 }, // North-West return
];

function polygonFunction() {
  if (window.map) {
    const delhiPolygon = new google.maps.Polygon({
      paths: delhiBoundary,
      geodesic: true,
      strokeColor: "#fff",
      strokeColor: 0.75,
      strokeWeight: 3,
      fillColor: "red",
      fillOpacity: 0.5,
    });

    delhiPolygon.setMap(map);
  }
}

function createHeader() {
  const header = document.createElement("header");

  const innerTube = document.createElement("div");
  innerTube.className = "header-innertube";

  const h1 = document.createElement("h1");
  h1.textContent = "First Web Mapping Application";

  innerTube.appendChild(h1);
  header.appendChild(innerTube);

  return header;
}

function buttonContainers() {
  const container = document.createElement("div");
  container.className = "button-container";

  const terrainButton = document.createElement("button");
  terrainButton.textContent = "Switch to Terrain";
  terrainButton.onclick = terrainFuntion;

  const markerButton = document.createElement("button");
  markerButton.textContent = "Eiffel Tower";
  markerButton.onclick = markerFunction;

  const polylineButton = document.createElement("button");
  polylineButton.textContent = "Path to home";
  polylineButton.onclick = polylineFunction;

  const polygonButton = document.createElement("button");
  polygonButton.textContent = "Delhi borders";
  polygonButton.onclick = polygonFunction;

  container.appendChild(terrainButton);
  container.appendChild(markerButton);
  container.appendChild(polylineButton);
  container.appendChild(polygonButton);

  return container;
}

function createMapContainer() {
  const mapDiv = document.createElement("div");
  mapDiv.id = "map";
  return mapDiv;
}

function createFooter() {
  const footer = document.createElement("footer");

  const innerTube = document.createElement("div");
  innerTube.className = "footer-inner";

  const p = document.createElement("p");
  p.textContent = "All right reserved to © Manas Kumar";

  innerTube.appendChild(p);
  footer.appendChild(innerTube);

  return footer;
}

function init() {
  const root = document.getElementById("root");

  root.appendChild(createHeader());
  root.appendChild(buttonContainers());
  root.appendChild(createMapContainer());
  root.appendChild(createFooter());

  loadGoogleMapsScript();
}

init();
