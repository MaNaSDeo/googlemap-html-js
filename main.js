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

  container.appendChild(terrainButton);
  container.appendChild(markerButton);

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
