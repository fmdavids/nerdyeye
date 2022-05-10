const express = require("express");
const path = require("path")
const app = express();
const people = require('./data')

app.use(express.static("./public"))

app.get("/", (req, res) =>{ 
  res.sendFile(path.resolve(__dirname, './public/dummy.html'))
  // res.status(200).send(`I dey nerdyEye`)
})

app.get("/data", (req, res, next) =>{ 
  res.status(200).send(people)
})

app.get("/about", (req, res) =>{ 
  res.status(200).send(`About me`)
})
app.get("/contact", (req, res) =>{ 
  res.status(200).send(`Contact me`)

})
app.get("/home", (req, res) =>{ 
  res.status(302).redirect(`/`)

})
app.get("*", (req, res) =>{ 
  res.status(404).send(`Oops! Not found`)

})


app.listen(5000, ()=>{
  console.log(`Server is listening on port 5000`)
})