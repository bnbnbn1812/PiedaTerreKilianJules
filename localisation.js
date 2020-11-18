if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (objPosition) {
        document.getElementById("latitude").innerHTML = objPosition.coords.latitude;
        document.getElementById("longitude").innerHTML = objPosition.coords.longitude;
        document.getElementById("accuracy").innerHTML = objPosition.coords.accuracy;
        document.getElementById("altitude").innerHTML = objPosition.coords.altitude;
        document.getElementById("altitudeaccuracy").innerHTML = objPosition.coords.altitudeAccuracy;
        document.getElementById("heading").innerHTML = objPosition.coords.heading;
        document.getElementById("speed").innerHTML = objPosition.coords.speed;
    }