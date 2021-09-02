const express = require("express");//importing the express module
const app = express(); //creating a reference for the express module
const http = require("http"); //importing the http module
const server = http.createServer(app); //app is sent to the constructor of createServer as an object
const {Server} = require("socket.io");
const io = new Server(server);


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
});

io.on('connection', (socket)=>{
    console.log('a user connected');
    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });

});

let messages = ["Welcome to 'Chat Through Socket.io'", "hello there", "I am fine", "i hope you are fine as well", "no worries! Please take a look around and let me know if you have any problem.", "happy chatting!", "you're welcome"];
let index = 1;

io.on('connection', (socket)=>{
    socket.on("chat message", (msg)=>{
        console.log("message: "+msg);
        io.emit("chat message", `Client says: ${msg}`);
        let d = new Date();
        let m = `Server says: ${messages[index++]} on 
                               ${d}`
        io.emit("obj1", m);
        
    });
    // socket.on("server message", (msg)=>{
    //     console.log("server message: "+msg);
    //     io.emit("server message", `Server says: ${msg}`)
    // });
    socket.emit("obj1", messages[0]);
});
// io.emit('some event', {
//     someProperty: 'some value',
//     otherProperty: 'other value'
// });
// io.on('connection', (socket)=>{
//     socket.broadcast.emit("welcome to the chatting app.");
// })



server.listen(9090, ()=>console.log("server running on port 9090"))