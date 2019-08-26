const forecast = require('./forecast.js')
const geocode = require('./geocode.js')

function getweather(location, cb) {
  geocode(location, (error, data) => {
    forecast(data.longitude, data.lattitude, (error, forecastData) => {


      if (cb) {
        cb(forecastData)
      }
    })


  })
}
const promise = new Promise((resolve, reject) => {
  geocode("Raiganj", (error, data) => {
    forecast(data.longitude, data.lattitude, (error, forecastData) => {

      resolve({forecastData,data})
    })
  })
})

promise.then(({forecastData,data}) => {
  console.log(data.location)
  console.log(forecastData.summary)
})

module.exports = getweather