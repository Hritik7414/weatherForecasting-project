const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var ejs = require('ejs');
const port = 80;

// setting up express
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded())

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.set('views', __dirname+"/templates");

var src = __dirname;


app.get('/', (req, res)=>{
    res.render("index");
})
app.get('/index', (req, res)=>{
    res.render("index");
})
app.get('/weather',(req, res)=>{
    res.render("weather");
})
app.get('/about',(req, res)=>{
    res.render('about')
})

app.get('/*', (req,res)=>{
    res.render("notfound");
})

app.get('/index/*', (req,res)=>{
    res.render("notfound");
})

app.get('/weather/*', (req,res)=>{
    res.render("notfound");
})

app.get('/about/*', (req,res)=>{
    res.render("notfound");
})

// Stating the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});