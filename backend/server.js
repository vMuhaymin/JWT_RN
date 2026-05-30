const express = require("express");
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Temporary user storage for debugging
const tempStorage = [{username : "Ali", password: "123"}]

app.post('/register', (req, res)=>{
    const {username, password} = req.body;

    if( !username || !password){
        return res.status(400).json({ok:false, error: "One of the attribute is missing"})
    }

    tempStorage.push({
        username:username,
        password:password
    });

    return res.status(200).json({HOLA : "user has been registered!"})
});

app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    if (!username || !password) {return res.status(400).json({ok: false, error: "user not found"})};

    user = tempStorage.find((u)=>{
        return u.username === username && u.password === password;
    });

    if (!user) {return res.status(400).json({ok: false, error: "user not found"})};
    return res.status(200).json({HOLA : "Welcome buddy!"})
});



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up! http://localhost:${PORT}/ `)
});
