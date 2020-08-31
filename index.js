const express = require('express');
var path = require('path');
const app = express();


const port = process.env.PORT || 8080;
app.use(express.static('static'));
app.get('/press',(req,res) => res.sendFile(path.join(__dirname + '/static/press.html')));
app.get('/',(req,res) => res.sendFile(path.join(__dirname + '/static/index.html')));

app.listen(port,()=> console.log(`Running on port: ${port}`));
