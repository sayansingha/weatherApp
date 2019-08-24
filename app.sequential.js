const getweather = require("./utils/getweather")
//console.time("TotalTime");

let responseCount = 1
//for (let i = 1; i <= 10; i++) {
  //let responsetimer = i;
  let a = Date.now()
  getweather("raiganj west bengal", (forecast) => {
    getweather("kolkata",(fore)=>{
      console.log(fore.summary)
    })
    console.log(forecast.summary)
    responseCount++
    if (responseCount === 11) {
      //console.timeEnd("TotalTime")
    }
  })
//}
console.log('Starts');