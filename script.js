window.onload = function() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12
    });
  
    // Add markers for each data point
    dataPoints.forEach(function(dataPoint) {
      new google.maps.Marker({
        position: dataPoint,
        map: map
      });
    });
  };
  