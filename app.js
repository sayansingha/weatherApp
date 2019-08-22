//import request  from "https";
const request = require('request');
const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')


geocode('Raiganj West Bengal',(error, data)=>{
    
        
    forecast(data.longitude,data.lattitude, (error, forecastData) => {
        //console.log('Error', error)
        console.log(data.location)
      console.log(forecastData)
      })
      
})



 




// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })