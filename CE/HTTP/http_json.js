const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async(req, res) =>{
    res.writeHead(200,{'Content-Type': 'application/json'});
    const filedata = await fs.readFile("./aa.json","utf8");
    const parsedata = JSON.parse(filedata);
    // const newdata = users.map((user)=>{
    //     return user.name
    // });
    // let newdata = "";
    // users.forEach((user)=>{
    //     newdata +=`${user.name}`;
    // });
    //res.end(JSON.stringify(users));
    // res.end(JSON.stringify(newdata));
    res.end(JSON.stringify(parsedata));
});
PORT = 3002;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});