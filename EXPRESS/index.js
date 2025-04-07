// index means first folder(deploy)
const express = require('express');
//const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());//middleware
// get- use to send data from server to client
// /- to create route
// const adi = [{
//     name: "Khushi"
// }]

// app.get('/',(req,res)=>{
//     res.send("This is Home page");
// })
// app.get('/home',(req,res)=>{
//     //res.send("This is About page");
//     //res.json(adi);
//     res.sendFile(path.join(__dirname,'/home.html'));
// })
// app.get('/about',(req,res)=>{
//     //res.send("This is About page");
//     //res.json(adi);
//     res.sendFile(path.join(__dirname,'/About_us.html'));
// })
// app.get('/contact',(req,res)=>{
//     //res.send("This is About page");
//     //res.json(adi);
//     res.sendFile(path.join(__dirname,'/contact.html'));
// })
app.post('/api/abes',(req,res)=>{
    console.log("body is--",req.body)
    res.json({})
})
app.listen(port,()=>{
    console.log(`app is runnig at :${port}`);
})
//difference between restful api and simple api