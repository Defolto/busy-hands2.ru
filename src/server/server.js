const app = require('express')();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://test:952863mak@cluster0.ainc3.mongodb.net/test?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, {useUnifiedTopology: true});

// для верного пути
app.use(express.static(path.resolve(__dirname, '../')));
// для работы с request
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/login', function(request, response){
    mongoClient.connect(function(err, client){

        const db = client.db("busy-hand");
        const collection = db.collection("users");
        
        collection.find({"email": request.body.date.email, "password": request.body.date.password}).toArray(function(err, results){
            if (results.length) {
                response.json(results[0]);
            } else {
                response.json(false);
            }
        });
    });
});

app.post('/getUsersChat', function(request, response){
    mongoClient.connect(function(err, client){

        const db = client.db("busy-hand");
        const collection = db.collection("users");
        let users = [];

        request.body.date.chats.forEach(element => {
            users.push(element.email)
        });

        collection.find({"email": {$in:  users}}).toArray(function(err, results){
            let users = results.map((object) =>{
                return {
                    name: object.name,
                    email: object.email,
                    img: object.img,
                    chats: object.chats
                }
            });
            response.json(users);
        });
    });
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