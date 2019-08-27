const getweather = require("./utils/getweather")
const input = require("./input.json")
console.time("TotalTime");

let responseCount = 1
for (let i = 0; i < input.length; i++) {
  getweather(input[i]).then(({
    summary
  }) => {
    console.log(input[i])
    console.log(summary)
  })
}

console.log('Starts');