const express = require("express");
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const tempStorage = [{username:"Ali",password:2312}]

app.post('/register', (req, res)=>{
    const {username, password} = req.body;

    if( !username || !password){
        return res.status(400).json({ok:false, error: "One of the attribute is missing"})
    }
    const user = {
        username:"",
        password:0
    }
    user.username = username; user.password = password;
    tempStorage.append(user)  
    return res.status(200).json({HOLA : "user has been registered!"})
});

app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    console.log( `The username is: ${username} | Password is ${password}` );

    user = tempStorage.filter((e)=>{
         e.username == username && e.password == password
    });

    if (!user) return res.status(400).json({ok: false, error: "user not found"})
    
    return res.status(200).json({HOLA : "Welcome buddy!"})
});



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up! http://localhost:${PORT}/ `)
});
