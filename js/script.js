var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 38.8818, lng: -78.5058},
  zoom: 8
  });
  
 var marker = new google.maps.Marker({
	 position: {lat: 38.8977, lng: -77.0365},
	 map: map
 }); 
} 


/*
new GMaps({
	div: '#map', 
	lat: 38.8977, 
	lng: -77.0365	
}); 
*/