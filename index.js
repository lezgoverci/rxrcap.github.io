const express = require('express');

const app = express();


const port = 3001;
app.use(express.static('static'));
app.get('/',(req,res) => res.send('Welcome to RXR. Website coming soon'));

app.listen(port,()=> console.log(`Running on port: ${port}`));
