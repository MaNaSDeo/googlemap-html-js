let map; //Declared globally

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 22.9734, lng: 78.6569 },
    zoom: 5,
    maxZoom: 7,
    minZoom: 3,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM, // position of zoom buttons TOP_LEFT, TOP_CENTER, TOP_RIGHT, LEFT_TOP, RIGHT_TOP, LEFT_CENTER, RIGHT_CENTER, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
    },
    scaleControl: true,
    fullscreenControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
    },
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
  });
}

function createLayout() {}

// Dynamically inject the Google Maps API script with your key
function loadGoogleMapsScript() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${window.env.GOOGLE_MAPS_API_KEY}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

loadGoogleMapsScript();
