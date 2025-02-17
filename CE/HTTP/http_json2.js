const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async(req,res)=>{
    if(req.url == "/"){
        res.writeHead(200,{'Content-Type': 'application/json'});
        const filedata = await fs.readFile("./aa.json","utf8");
        res.end(filedata);
        
    }
    else if(req.url == "/home"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        const data = await fs.readFile("./home.html","utf-8");
        res.end(data);
    }
    else if(req.url == "/error"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        const data = await fs.readFile("./error.html","utf-8");
        res.end(data);
    }
});
PORT = 3002;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});