var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var bounds = new google.maps.LatLngBounds();
//var pos = new google.maps.LatLng(localStorage.getItem('currentLat'), Apperyio.storage.currentLng.get());
var pos = new google.maps.LatLng(localStorage.getItem('currentLat'), localStorage.getItem('currentLng'));


function initialize() {
    console.log('Initializing...');
    
    map = Apperyio("google_map").gmap;
    if (!map)
    {
        setDelay();
    }
    else
    {
        directionsDisplay = new google.maps.DirectionsRenderer();
    }
}
 
function displayDirections(destinationAddress, map) {
    var request = {
        origin: pos,
        destination: destinationAddress,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
    directionsDisplay.setMap(map);
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        alert("Directions query unsuccessful. Response status: " + status);
      }
    });
}

function setDelay()
{
	setTimeout(initialize, 50);
}