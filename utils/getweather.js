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

  module.exports = getweather