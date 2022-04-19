const http = require('http');

console.log(http)

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end(`Hello World from my first NODE APP Home Page`);
    }else if(req.url === '/node'){
        res.end(`This is NODE page`)
    }
    else if(req.url === '/style'){
        res.end(`This is STYLE sheet`)
    }else{
        res.end('Oops! Page not found')
    }
});

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})