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
