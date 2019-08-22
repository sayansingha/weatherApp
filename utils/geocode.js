const request = require('request')

const geocode=(address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2F5YW5zaW5naGEiLCJhIjoiY2p6azBhbmg1MGVjOTNocGVwdjE3Nm9pNCJ9.Rp9Rd6md969tE6Qg5iYzWA&limit=1';
    request({url:url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to ...',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to ...', undefined)
        }
        else{
            callback(undefined,{
                lattitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}



module.exports = geocode