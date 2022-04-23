const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 5000

const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        const data = fs.readFileSync('routeTask/index.html', 'utf-8')
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    }else  if(req.url == '/home'){
        const data = fs.readFileSync('routeTask/index.html', 'utf-8')
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    }else  if(req.url == '/contact'){
        const data = fs.readFileSync('routeTask/contact.html', 'utf-8')
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    }else  if(req.url == '/about'){
        const data = fs.readFileSync('routeTask/about.html', 'utf-8')
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    }else{
        const data = fs.readFileSync('routeTask/404.html', 'utf-8')
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    }
})

server.listen(port, () =>{
    console.log(
        "Listening on Prot 5000"
    )
})