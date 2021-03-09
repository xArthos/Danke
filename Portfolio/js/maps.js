// Initialize and add the map
function initMap() {
    // My Location
    const myLocation = { lat: 51.43008839154588, lng: 6.763035152819357 };
    // The map, centered at my Location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15.5,
        center: myLocation
    });
    // The marker, positioned at my Location
    const marker = new google.maps.Marker({
        position: myLocation,
        map: map
    });
};