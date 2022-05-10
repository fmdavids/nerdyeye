const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.static("./public"));

app.get(`/`, (req, res) =>{
    res.sendFile(path.resolve(__dirname, `./public/index.html`))
})
app.get(`/about`, (req, res) =>{
    res.sendFile(path.resolve(__dirname, './public/about.html'))
})
app.get(`/contact`, (req, res) =>{
    res.sendFile(path.resolve(__dirname, `./public/contact.html`))
})
app.get(`home`, (req, res) =>{
    res.redirect(`/`)
})
app.get(`*`, (req, res) =>{
    res.sendFile(path.resolve(__dirname, `./public/404.html`))
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

