function createMap(){

	var fullstackAcademy = new google.maps.LatLng(40.705189, -74.009144);

	var mapCanvas = document.getElementById("map")
	var options = {
		center: fullstackAcademy,
		zoom: 16,
		mapTypeId: google.maps.ROADMAP
	}

	var map = new google.maps.Map(mapCanvas, options)

	var marker = new google.maps.Marker({
		position: fullstackAcademy,
		title: "Fullstack Academy of Code"
	});

	marker.setMap(map);
	// var markers = [marker]
	// for(var point in markers){
	// 	point.setMap(map);
	// }

}

createMap();