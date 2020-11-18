if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (objPosition) {
        document.getElementById("latitude").innerHTML = objPosition.coords.latitude;
        document.getElementById("longitude").innerHTML = objPosition.coords.longitude;
        document.getElementById("accuracy").innerHTML = objPosition.coords.accuracy;
        document.getElementById("altitude").innerHTML = objPosition.coords.altitude;
        document.getElementById("altitudeaccuracy").innerHTML = objPosition.coords.altitudeAccuracy;
        document.getElementById("heading").innerHTML = objPosition.coords.heading;
        document.getElementById("speed").innerHTML = objPosition.coords.speed;
    }, function (objErreur) {
        var strErreur = '';
        switch (objErreur.code) {
            case objErreur.PERMISSION_DENIED:
                strErreur = "Vous n'avez pas donné la permission de déterminer votre position."
                break;
            case objErreur.TIMEOUT:
            case objErreur.POSITION_UNAVAILABLE:
                strErreur = "Votre position n'a pas pu être déterminée."
                break;
            default:
                strErreur = "Erreur inconnue."
                break;
        };
        alert(strErreur);
    }, {
        timeout: 20,
        enableHighAccuracy: true,
        maximumAge: 0
    });
}
