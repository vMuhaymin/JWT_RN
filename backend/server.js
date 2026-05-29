const express = require("express");
const app = express()

app.get('/', (req, res)=>{
    return res.status(200).json({HOLA : "Welcome buddy!"})
});


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up! http://localhost:${PORT}/ `)
});
