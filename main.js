function myFuntion() {
  if (window.map) map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
  else console.warn("Map not initialized yet.");
}

function createHeader() {
  const header = document.createElement("header");

  const innerTube = document.createElement("div");
  innerTube.className = "header-innertube";

  const h1 = document.createElement("h1");
  h1.textContent = "First Web Mapping Application";

  const button = document.createElement("button");
  button.textContent = "Switch to Terrain";
  button.onclick = myFuntion;

  innerTube.appendChild(h1);
  innerTube.appendChild(button);
  header.appendChild(innerTube);

  return header;
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
  root.appendChild(createMapContainer());
  root.appendChild(createFooter());

  loadGoogleMapsScript();
}

init();
