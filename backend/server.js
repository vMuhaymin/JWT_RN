const express = require("express");
const cors = require('cors')
const jwt = require('jsonwebtoken')
const secret = "secret123"

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Temporary user storage for debugging
const tempStorage = [{username : "Ali", password: "123"}]
let auth = ""; 
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

    if (!user) {
        auth = "no-authenticated"; 
        return res.status(400).json({ok: false, error: "user not found"})
    };
    const token = jwt.sign( user , secret, {
        expiresIn: '1m'
    } );

    auth = "authenticated"; 
    return res.status(200).json({ token })

});

const verifyToken= (req, res, next)=>{
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({ok: false, error: "Access is denied"});
    try{
        const decode = jwt.verify(token ,secret);
        next();
    } catch{
        return res.status(400).json({ error: 'Invalid token' });
    }

}

app.get('/checkAuth', verifyToken , (req, res)=>{
    return  res.status(200).json({
        ok: true,
        auth: "authenticated"})  
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up! http://localhost:${PORT}/ `)
});
