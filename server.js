// server.js

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('/api/getSomething', (req, res) => {
    const list = ["Course 1", "Course 2", "Course 3"];
    res.json(list);
});

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname + '/frontend/dist/index.html'))
});

app.listen(process.env.PORT || 4000, function(){
    console.log('NodeJS Server Running...');
});
