const express = require("express");
const cors = require('cors')

const app = express()
app.use(cors())


const tempStorage = []



app.post('/register', (req, res)=>{
    const {username, password} = req.body;
    if( !username || !password){
        return res.status(400).json({ok:false, error: "One of the attribute is missing"})
    }

    const user = {
        username,
        password
    }
    user.name =req.body.username; user.password =req.body.password;
    tempStorage.append(user)  
    return res.status(200).json({HOLA : "user has been registered!"})
});

app.post('/login', (req, res)=>{
    const userInfo = req.body;
    user = tempStorage.forEach((e)=>{
        e.username == userInfo.username && e.password == userInfo.password
    });
    
    if (!user) return res.status(400).json({ok: false, error: "user not found"})
    
    return res.status(200).json({HOLA : "Welcome buddy!"})
});



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up! http://localhost:${PORT}/ `)
});
