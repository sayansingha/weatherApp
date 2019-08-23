const request = require('request');
const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')

console.time("TotalTime");

let response = 1
for(let i = 1; i <= 10; i++)
{
    //let responsetimer = i;
    let a = Date.now()
    geocode('Raiganj West Bengal', (error, data) => {
        forecast(data.longitude, data.lattitude, (error, forecastData) => {
            console.log(data.location)
            console.log(forecastData.summary)
            //console.timeEnd("TotalTime")
            // forecastData.responsetimer = i
            response++
            if(response === 11)
                console.timeEnd("TotalTime")
        })  
    
        
    })
}
console.log('Starts');