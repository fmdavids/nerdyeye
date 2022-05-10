const express = require("express");
const path = require("path")
const people = require('./data')
// console.log(people)
const app = express();

// app.use(express.static("./public"))

//npm run dev
// req.params 
// req.query 
// req.body

app.get("/people", (req, res) =>{ 
    // console.log(req)
  res.status(200).send(people)
})

//REQ.PARAMS

app.get(`/person/:id`, (req,res) =>{
    const id = req.params.id
// const onePerson = people.map((person) =>{
//     if(person.id == person)return person;

// })
const onePerson = people.find((person) => person.id == id) 
if(!onePerson)return res.status(200).send(onePerson)
    
// })
res.status(200).send(onePerson)
})
// app.get("/data", (req, res, next) =>{ 
//   res.status(200).send(people)
// })

//REQ.QUERY
app.get(`/people/query`, (req, res) =>{
    const {name} = req.query

    // const result = people.filter((person)=>person.name == name)
    // let result = people.filter((person)=>person.name.startsWith(name))
     const result = people.filter((person)=>person.name.includes(name))
    //if(!result) return res.status(404).send(`it does not match`)
    // res.status(200).send(result)
    res.status(200).send({success: true, data: result, total:result.length})

    //result = result.slice(0, Number(limit))
})


app.listen(5000, ()=>{
    console.log(`Server is listening on port 5000`)
  })