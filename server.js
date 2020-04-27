// server.js

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/frontend/index.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log('NodeJS Server Running...');
});
