const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) =>{
    const data = fs.readFileSync('newFolder/index.html', 'utf-8')
    res.writeHead(200, {'content-type' : 'text/html' })
    res.write(data)
    res.end()
})

server.listen(port, () =>{
    console.log('listening on Port 5000')
})