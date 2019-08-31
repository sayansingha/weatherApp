const getweather = require("./utils/getweather")
const express = require('express')
const app = express()

app.use(express.json())
// const weather = [{
//         place: "raiganj",
//         summary: "windy and warm"
//     },
//     {
//         place: "kolkata",
//         summary: "windy and humid"
//     },
//     {
//         place: "maldah",
//         summary: "windy and rainy"
//     }
// ]

// app.get('/',(req,res)=>{
//     res.send('Hello World!!')
// })
// app.get('/api/secret',(req,res)=>{
//     res.send({
//         name : "James Bond",
//         ID: "007"
//     })
// })
// app.get('/api/posts/:year/:month', (req,res)=>{
//     res.send(req.params)
// })
// app.get('/api/geocode', (req, res) => {
//     res.send(weather)
//     //console.log(req.query)
// })

app.get('/api/geocode/cool', (req, res) => {
    //console.log(JSON.stringify(req,null,2))
    // const i = weather.find((c) => c.place === req.query.place)
    // if (!i) {
    //     res.status(404).send("NOT FOUND!")
    // } else {
    //     res.send(i)
    // }
    //console.log(req.query.place)
    const location = req.query.place
    getweather(location).then(({
        summary
      }) => {
        res.send(summary)
      })
    
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`) //it wll show 5000 because I have put "export PORT=5000"
})

// app.post()
// app.put()
// app.delete()