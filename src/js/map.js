
function initMap() {
  var uluru = {lat: 49.8263456, lng: 23.9906052};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}
    

