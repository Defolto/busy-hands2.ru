const app = require('express')();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');

app.use(express.static(path.resolve(__dirname, '../')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/login', function(request, response){
  response.json(request.body.date.name);
});

io.on('connection', (socket) => {
    socket.on('sendMessage', (msg, name) => {
      console.log(name);
      io.emit('sendMessage', msg, name);
    });

    socket.on('show', (name) => {
        io.emit('show', name);
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});