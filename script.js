window.onload = function() {
    var dataPoints = [
        { lat: 37.7749, lng: -122.4194 }, // San Francisco
        { lat: 34.0522, lng: -118.2437 }, // Los Angeles
        { lat: 40.7128, lng: -74.0060 } // New York
      ];
      
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
  