//req => middleware ==> res

//type of middleware
// application middleware
// Router middleware
//Embeded middleware

const express = require("express");
const app = express();

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}
app.use(logger)

app.get("/", logger, (req, res) =>{ 
  res.status(200).send(`Home`)
})
app.get("/about", logger, (req, res) =>{ 
  res.status(200).send(`About`)
})


app.listen(5000, ()=>{
    console.log(`Server is listening on port 5000`)
  })