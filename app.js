const request = require('request');
const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')

console.time("TotalTime");

function getweather(location, cb) {
  geocode(location, (error, data) => {
    forecast(data.longitude, data.lattitude, (error, forecastData) => {


      if (cb) {
        cb(forecastData)
      }
    })


  })
}

let responseCount = 1
for (let i = 1; i <= 10; i++) {
  //let responsetimer = i;
  let a = Date.now()
  getweather("raiganj west bengal", (forecast) => {
    console.log(forecast.summary)
    responseCount++
    if (responseCount === 11) {
      console.timeEnd("TotalTime")
    }
  })
}
console.log('Starts');