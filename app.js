const getweather = require("./utils/getweather")
const input = require("./input.json")
console.time("TotalTime");

let responseCount = 1
for (let i = 0; i < input.length; i++) {
  //let responsetimer = i;
  let a = Date.now()
  getweather(input[i], (forecast) => {
    console.log(input[i])
    console.log(forecast.summary)
    responseCount++
    if (responseCount === 11) {
      console.timeEnd("TotalTime")
    }
  })
}
console.log('Starts');