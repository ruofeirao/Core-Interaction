// let lat = 40.7354,
//     lng = -73.99475;



let uv_index = document.querySelector('.value');
var uv_div = document.getElementById('bg');

    // Run geolocationn lookup
    // success set lat and lng
    // get uv information with fetch and lat & lng

    const success = function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        lat = position.coords.latitude;
        long = position.coords.longitude;
        // lat = 34.052235,
        // long = 174.763336;
        fetch(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${long}`, {
            headers: {
                'x-access-token': '88f4eae0c23abab5bed6c4c99055b15e'
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            const {uv} = myJson.result;
            uv_index.textContent = uv;
            console.log(uv);
            if (uv < 3) {
                uv_div.style.backgroundColor = '#558B2F';
            } else if (3 < uv && uv < 6) {
                uv_div.style.backgroundColor = '#F9A825';
            } else if (6 < uv && uv < 8) {
                uv_div.style.backgroundColor = '#EF6C00';
            } else if (8 < uv && uv < 11) {
                uv_div.style.backgroundColor = '#B71C1C';
            } else if (uv > 11) {
                uv_div.style.backgroundColor = '#6A1B9A';
            }
        });
    }


  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success);
  };


var date = new Date();
document.getElementById("date").innerHTML = date;