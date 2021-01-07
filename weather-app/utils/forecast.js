const request = require("request");


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=8552a5838f2b787d687c10331b2236e6&query=" + longitude + "," + latitude + "+&units=f"

    request({url: url, json: true}, (error, { body }) => {
        if(error) {
            callback("Unable to connect to location services!", undefined)
        } else if(body.error) {
            callback("Unable to find the given location", undefined)
        } else {
            callback(undefined, {
                descriptions: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike,
            })
        }
    })
}

// const url = "http://api.weatherstack.com/current?access_key=8552a5838f2b787d687c10331b2236e6&query=37.8267,-122.4233&units=f"

/*request({ url: url, json: true }, (error, response) => {
    if(error) {
        console.log("Unable to connect to weather service!");
    } else if(response.body.error) {
        console.log("Unable to find location")
    } else {
        const data = response.body;
        console.log(data.current.weather_descriptions[0] + ". It is currently " + data.current.temperature + " degrees out. It feels like " + data.current.feelslike + " degrees out.")
    }
    //const data = response.body;
    //console.log(data.current.weather_descriptions[0] + ". It is currently " + data.current.temperature + " degrees out. It feels like " + data.current.feelslike + " degrees out.")
})*/

module.exports = forecast