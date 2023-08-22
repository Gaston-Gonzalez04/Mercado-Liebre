const express = require ('express');
const path = require ('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.listen(PORT, () =>{
    console.log(`[Server]: running on port ${PORT}`);
})

app.use(express.static('public'));

