const http = require("http");

const url = "http://api.weatherstack.com/current?access_key=8552a5838f2b787d687c10331b2236e6&query=40,-75+&units=f"

http.request(url, (response) => {

    let data = ""

    response.on("data", (chunk) => {
        console.log(chunk)
    })

    response.on("end", () => {

    })

})

request.end()