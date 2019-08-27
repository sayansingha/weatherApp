const getweather = require("./utils/getweather")

let responseCount = 1
getweather("raigaj west bengal").then(({
    summary
  }) => {
    console.log("raiganj")
    console.log(summary)
    return getweather("kolkata west bengal")
  })
  .then(({
    summary
  }) => {
    console.log("kolkata")
    console.log(summary)
  })
  
console.log('Starts');