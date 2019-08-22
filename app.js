//import request  from "https";
console.time("Total Time");
const request = require('request');
const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')

var i 
for(i = 1;i < 10;i++){
  
geocode('Raiganj West Bengal',(error, data)=>{
    
        
    forecast(data.longitude,data.lattitude, (error, forecastData) => {
        //console.log('Error', error)
        console.log(data.location)
      console.log(forecastData)
      })
     
})
}

console.timeEnd("Total Time");

 
console.log('Sayan Singha')



// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })