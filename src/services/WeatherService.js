export async function getCurentWeather(){
    //const response = await fetch()
    var options = {
        host: 'https://api.openweathermap.org/data/2.5/',
        path: 'onecall?lat=58.59&lon=25.01&exclude=hourly,daily&appid=da5ba07233d4b06864f111f800d573d6',
        method: 'GET'
    };

    http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      }).end();
}