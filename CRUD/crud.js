const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const database = [{id:1,name:"khushi",age:21},
    {id:2,name:"dev",age:15},
]
//Create(C) POST
app.post('/users',(req,res)=>{
    const newuser ={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    }
    database.push(newuser);
    res.status(201).json(newuser);
})
//Read(R) GET-->read all data

app.get('/users',(req,res)=>{
    res.json(database);
});


//Read(R) GET-->read one
app.get('/users/:id',(req,res)=>{
    const userid = parseInt(req.params.id);
    const user=database.find(u=>u.id==userid)
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({message:"user not found"});
    }

})

//Update(U) PUT

app.put('/users/:id',(req,res)=>{
    const userid = parseInt(req.params.id);
    const userIndex = database.findIndex(u=>u.id==userid);
    if(userIndex!=-1){
        database[userIndex]={...database[userIndex],...req.body}
        res.json(database[userIndex]);
    }
    else{
        res.status(404).json({message:"user not found"});
    }
})

//Delete(D) DELETE

app.delete('/users/:id',(req,res)=>{
    const userid = parseInt(req.params.id);
    const userIndex = database.findIndex(u=>u.id==userid);
    if(userIndex!=-1){
        const deleteuser = database.splice(userIndex,1)
        res.json(deleteuser);
    }
    else{
        res.status(404).json({message:"user not found"});
    }
})
app.listen(port,()=>{
    console.log(`app is running at:${port}`);
})

