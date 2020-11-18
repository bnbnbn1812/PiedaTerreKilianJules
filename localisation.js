var geocoder;
var map;
var addressData = [{
    location: "New York, NY, USA"
}, {
    location: "Newark, NJ, USA"
}];

function initialize() {
    var map = new google.maps.Map(
        document.getElementById("map_canvas"), {
        center: new google.maps.LatLng(37.4419, -122.1419),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var coordinates = [{}];
    var geocoder = new google.maps.Geocoder();
    var bounds = new google.maps.LatLngBounds();

    function findLatLang(address, geocoder, mainMap) {
        return new Promise(function (resolve, reject) {
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status === 'OK') {
                    console.log(results);
                    resolve([results[0].geometry.location.lat(), results[0].geometry.location.lng()]);
                } else {
                    reject(new Error('Couldnt\'t find the location ' + address));
                }
            })
        })
    }

    function getPoints(geocoder, map) {
        let locationData = [];
        let latValue;
        for (let i = 0; i < addressData.length; i++) {
            locationData.push(findLatLang(addressData[i].location, geocoder, map))
        }
        return locationData // array of promises
    }

    var locations = getPoints(geocoder, map)

    Promise.all(locations)
        .then(function (returnVals) {
            // you should have return values here when
            // all promises have rsolved
            console.log(returnVals);
            coordinates = returnVals;
            returnVals.forEach(function (latLng) {
                console.log(latLng);
                var marker = new google.maps.Marker({
                    position: {
                        lat: latLng[0],
                        lng: latLng[1]
                    },
                    map: map
                });
                bounds.extend(marker.getPosition());
                map.fitBounds(bounds);
            })
        })
}
google.maps.event.addDomListener(window, "load", initialize);