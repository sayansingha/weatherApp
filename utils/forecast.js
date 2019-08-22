const request = require('request');

const forecast=(lattitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/f4af100e9928e1bedd7269d5969299df/'+ lattitude +',' + longitude
        request({url:url, json: true}, (error, response)=>{
            if(error){
                callback('Unable to ...',undefined)
            }
            else{
                callback(undefined,{
                    summary: response.body.currently.summary
                })
            }
        })
    }

module.exports = forecast




// const url = 'https://api.darksky.net/forecast/f4af100e9928e1bedd7269d5969299df/22.5726,88.3639'
// request({url: url, json: true }, (error,response)=>{
//     console.log(response.body.daily.data[0].summary);
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F5YW5zaW5naGEiLCJhIjoiY2p6azBhbmg1MGVjOTNocGVwdjE3Nm9pNCJ9.Rp9Rd6md969tE6Qg5iYzWA&limit=1'

// request({url: geocodeURL, json: true},(error,response)=>{
//     const lat = response.body.features[0].center[1]
//     const lon = response.body.features[0].center[0]
//     console.log(response.body.features[0].center);
// }) 
