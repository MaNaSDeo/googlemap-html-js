function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 22.9734, lng: 78.6569 },
    zoom: 5,
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
